/* eslint-disable no-throw-literal */
import { HelperService } from './../../services/helper.service.service';
import { SnackBarService } from './../../services/snackBar.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { combineLatest, firstValueFrom, map } from 'rxjs';
import { DiarioService } from 'src/services/diario.service';
import { IConceptoDiario } from 'src/models/concepto.diario';
import { UsersService } from 'src/services/users.service';
import { ModalController } from '@ionic/angular';
import { ModalDateComponent } from 'src/components/modal-date/modal-date.component';
import { DatePipe } from '@angular/common';
import { UrlConstants } from 'src/constants/url.constants';
import { CalculationService } from 'src/sharedServices/calculationService';
import { ModalDailyInputComponent } from 'src/components/modal-daily-input/modal-daily-input.component';
import { ModalBalanceComponent } from 'src/components/modal-balance/modal-balance.component';
import { ISaldoItem } from 'src/models/saldoItem';
import { SumaryMonthService } from 'src/services/sumary-month.service';
import { SumaryAnioService } from 'src/services/sumary-anio.service';
import { SumaryMonth } from 'src/models/sumaryMonth';
import { SumaryAnio } from 'src/models/sumaryAnio';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-daily',
  templateUrl: './daily.page.html',
  styleUrls: ['./daily.page.scss'],
})
export class DailyPage implements OnInit {
  loading = false;
  loadingBalance = false;
  dateCtrl = '';
  conceptos: IConceptoDiario[];
  saldoDiario = 0;

  constructor(private diarioService: DiarioService,
              private snackBarService: SnackBarService,
              private sumaryMonthService: SumaryMonthService,
              private sumaryAnioService: SumaryAnioService,
              private modalCtrl: ModalController,
              public userService: UsersService,
              private calculationService: CalculationService,
              private translateService: TranslateService,
              private datePipe: DatePipe,
              private router: Router,
              private helperService: HelperService,
              private activeRoute: ActivatedRoute) { }

  async ngOnInit() {
    this.activeRoute.params
      .subscribe(routeParams => {
        const controlDate = this.getDateFromUrl();
        if (controlDate === null){
          this.router.navigate([UrlConstants.daily, this.datePipe.transform(new Date(), 'yyyy-MM-dd')]);
        } else {
          controlDate.setMonth(controlDate.getMonth());
          this.setDateCtrl();
          this.getData();
        }
      });
  }

  async getData(): Promise<void> {
    this.loading = true;

    const source$ = this.diarioService.getConceptosImportes(this.getDateFromUrl());

    try {
      const data = await firstValueFrom(source$);

      this.conceptos = data;
      this.saldoDiario = this.getIngresos() - this.getEgresos();
      this.loading = false;

    } catch (error) {
      this.loading = false;
      this.snackBarService.showSnackBarError(this.helperService.getErrorMessage(error));
    }
  }

  async openDateModal(){
    const popupDate = this.datePipe.transform(this.getDateFromUrl(), 'yyyy-MM-dd');

    const modal = await this.modalCtrl.create({
      component: ModalDateComponent,
      componentProps: { data: popupDate },
      cssClass: 'datetime-modal'
    });

    modal.onDidDismiss()
      .then((data) => {
        if (data.data){
          this.router.navigate([UrlConstants.daily, this.datePipe.transform(new Date(data.data), 'yyyy-MM-dd')]);
        }
    });

    return await modal.present();
  }

  favoriteClicked(event: boolean) {
    console.log(event);
  }

  async gridItemClicked(item: IConceptoDiario) {

    const modal = await this.modalCtrl.create({
      component: ModalDailyInputComponent,
      componentProps: { data: item },
      cssClass: 'dailyInput-modal'
    });

    modal.onDidDismiss()
      .then((data) => {
        if (data.data){
          this.saldoDiario = this.getIngresos() - this.getEgresos();
        }
    });

    return await modal.present();
  }

  async openBalance(){
    this.loadingBalance = true;

    const saldos: ISaldoItem[] = [];

    const saldoItemDiario: ISaldoItem = {
      title: '' + this.helperService.toCamelCase(this.datePipe.transform(this.getDateFromUrl(), 'mediumDate')),
      icon: 'calendar-outline',
      ingresos: this.getIngresos(),
      egresos: this.getEgresos(),
      concept: 'diario',
      date: this.getDateFromUrl()
    };

    saldos.push(saldoItemDiario);

    const source1$ = this.sumaryMonthService.getSumary(this.getDateFromUrl());
    const source2$ = this.sumaryAnioService.getSumary(this.getDateFromUrl());

    try {

      const resultData = await combineLatest({
        mensual: source1$,
        anual: source2$
      })
      .pipe(
        map(response => {
          const mensual = response.mensual as SumaryMonth;
          const anual = response.anual as SumaryAnio;
          const result: any = {};

          result.mensual = mensual;
          result.anual = anual;

          return result;
        })
      ).toPromise();

      const saldoItemMensual: ISaldoItem = {
        title: '' + this.helperService.toCamelCase(this.datePipe.transform(this.getDateFromUrl(), 'LLLL yyyy')),
        icon: 'calendar-clear-outline',
        ingresos: resultData.mensual.in,
        egresos: resultData.mensual.out,
        concept: 'mensual',
        date: this.getDateFromUrl()
      };
      saldos.push(saldoItemMensual);

      const saldoItemAnual: ISaldoItem = {
        title: this.translateService.instant('dailyScreen.year') + ' ' + this.datePipe.transform(this.getDateFromUrl(), 'yyyy'),
        icon: 'albums-outline',
        ingresos: resultData.anual.in,
        egresos: resultData.anual.out,
        concept: 'mensual',
        date: this.getDateFromUrl()
      };
      saldos.push(saldoItemAnual);

      this.loadingBalance =false;

      const modal = await this.modalCtrl.create({
        component: ModalBalanceComponent,
        componentProps: { data: saldos },
        cssClass: 'balance-modal-x3'
      });

      modal.onDidDismiss()
        .then((data) => {
          if (data.data){
          }
      });

      return await modal.present();

    } catch (error) {
      this.loadingBalance = false;
      this.snackBarService.showSnackBarError(this.helperService.getErrorMessage(error));
    }
  }

  private getDateFromUrl(): Date {
    const dateUrl = this.activeRoute.snapshot.paramMap.get('day')?.split('-');
    if (dateUrl === null || dateUrl === undefined) {
      return null;
    }
    return new Date(Number(dateUrl[0]), Number(dateUrl[1])-1, Number(dateUrl[2]));
  }

  private setDateCtrl() {
    this.dateCtrl = this.datePipe.transform(this.getDateFromUrl(), 'mediumDate');
  }

  private getIngresos(): number {
    return this.calculationService.getIngresos(this.convertToNumberArray(this.conceptos));
  }

  private getEgresos(): number {
    return this.calculationService.getEgresos(this.convertToNumberArray(this.conceptos));
  }

  private convertToNumberArray(dataIn: IConceptoDiario[]): number[] {
    const importes: number[] = [];
    dataIn.forEach(value =>  {
      importes.push(value.ammount);
    });

    return importes;
  }
}
