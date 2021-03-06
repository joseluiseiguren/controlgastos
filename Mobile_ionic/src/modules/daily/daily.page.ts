/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable no-throw-literal */
import { HelperService } from './../../services/helper.service.service';
import { SnackBarService } from './../../services/snackBar.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { forkJoin } from 'rxjs';
import { DiarioService } from 'src/services/diario.service';
import { IConceptoDiario } from 'src/models/concepto.diario';
import { UsersService } from 'src/services/users.service';
import { ModalController } from '@ionic/angular';
import { DatePipe } from '@angular/common';
import { UrlConstants } from 'src/constants/url.constants';
import { CalculationService } from 'src/sharedServices/calculationService';
import { ModalDailyInputComponent } from 'src/components/modal-daily-input/modal-daily-input.component';
import { ModalBalanceComponent } from 'src/components/modal-balance/modal-balance.component';
import { ISaldoItem } from 'src/models/saldoItem';
import { SumaryMonthService } from 'src/services/sumary-month.service';
import { SumaryAnioService } from 'src/services/sumary-anio.service';
import { TranslateService } from '@ngx-translate/core';
import { DateNativeModalService } from 'src/services/date-native-modal.service';

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

  private filterFavoriteOn = false;
  private filterHideceroOn = false;

  private conceptosOriginal: IConceptoDiario[];

  private selectedDate: Date;

  constructor(private diarioService: DiarioService,
              private snackBarService: SnackBarService,
              private sumaryMonthService: SumaryMonthService,
              private sumaryAnioService: SumaryAnioService,
              private dateNative: DateNativeModalService,
              private modalCtrl: ModalController,
              public userService: UsersService,
              private calculationService: CalculationService,
              private translateService: TranslateService,
              private datePipe: DatePipe,
              private router: Router,
              private helperService: HelperService,
              private activeRoute: ActivatedRoute) { }

  async ngOnInit() {
    let controlDate = this.getDateFromUrl();
    if (controlDate === null){
      controlDate = new Date();
    }

    this.selectedDate = controlDate;
    this.setDateCtrl();
    this.getData();
  }

  async getData(): Promise<void> {
    this.loading = true;

    try {
      const data = await this.diarioService.getConceptosImportes(this.selectedDate).toPromise();

      if (data.length === 0){
        this.router.navigate([UrlConstants.concepts]);
        return;
      }

      this.conceptos = data;
      this.conceptosOriginal = data;

      this.saldoDiario = this.getIngresos() - this.getEgresos();
      this.loading = false;

    } catch (error) {
      this.loading = false;
      this.snackBarService.showSnackBarError(this.helperService.getErrorMessage(error));
    }
  }

  async openDateModal(){
    const dateSelected = await this.dateNative.openDateModal(this.selectedDate, this.userService.userLanguage);

    if (dateSelected !== undefined) {
      this.router.navigate([UrlConstants.daily, this.datePipe.transform(dateSelected, 'yyyy-MM-dd')]);
    }
  }

  favoriteClicked(event: boolean) {
    this.filterFavoriteOn = event;
    this.applyFilters();
  }

  hideceroClicked(event: boolean) {
    this.filterHideceroOn = event;
    this.applyFilters();
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
      title: '' + this.helperService.toCamelCase(this.datePipe.transform(this.selectedDate, 'mediumDate')),
      icon: 'calendar-outline',
      ingresos: this.getIngresos(),
      egresos: this.getEgresos(),
      concept: 'diario',
      date: this.selectedDate
    };

    saldos.push(saldoItemDiario);

    const source1$ = this.sumaryMonthService.getSumary(this.selectedDate);
    const source2$ = this.sumaryAnioService.getSumary(this.selectedDate);

    try {
      const resultData: any = await forkJoin([source1$, source2$]).toPromise();

      const saldoItemMensual: ISaldoItem = {
        title: '' + this.helperService.toCamelCase(this.datePipe.transform(this.selectedDate, 'LLLL yyyy')),
        icon: 'calendar-clear-outline',
        ingresos: resultData[0].in,
        egresos: resultData[0].out,
        concept: 'mensual',
        date: this.selectedDate
      };
      saldos.push(saldoItemMensual);

      const saldoItemAnual: ISaldoItem = {
        title: this.translateService.instant('dailyScreen.year') + ' ' + this.datePipe.transform(this.selectedDate, 'yyyy'),
        icon: 'albums-outline',
        ingresos: resultData[1].in,
        egresos: resultData[1].out,
        concept: 'mensual',
        date: this.selectedDate
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
    this.dateCtrl = this.datePipe.transform(this.selectedDate, 'mediumDate');
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

  private applyFilters(){
    this.conceptos = this.conceptosOriginal;

    if (this.filterFavoriteOn === true || this.filterHideceroOn === true){
      if (this.filterFavoriteOn === true){
        this.conceptos = this.conceptos.filter(x => x.favorite === true);
      }
      if (this.filterHideceroOn === true){
        this.conceptos = this.conceptos.filter(x => this.filterHideceroOn === true && x.ammount !== 0);
      }
    }
  }
}
