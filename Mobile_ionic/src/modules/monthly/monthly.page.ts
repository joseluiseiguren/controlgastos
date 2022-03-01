import { UsersService } from 'src/services/users.service';
import { HelperService } from 'src/services/helper.service.service';
import { SnackBarService } from 'src/services/snackBar.service';
import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { combineLatest, firstValueFrom, map } from 'rxjs';
import { ModalDateMonthComponent } from 'src/components/mmodal-date-month/mmodal-date-month.component';
import { UrlConstants } from 'src/constants/url.constants';
import { DiarioService } from 'src/services/diario.service';
import { CalculationService } from 'src/sharedServices/calculationService';
import { ISaldoItem } from 'src/models/saldoItem';
import { SumaryAnio } from 'src/models/sumaryAnio';
import { SumaryAnioService } from 'src/services/sumary-anio.service';
import { TranslateService } from '@ngx-translate/core';
import { ModalBalanceComponent } from 'src/components/modal-balance/modal-balance.component';

@Component({
  selector: 'app-monthly',
  templateUrl: './monthly.page.html',
  styleUrls: ['./monthly.page.scss'],
})
export class MonthlyPage implements OnInit {
  loading = false;
  loadingBalance = false;
  loadingDetail = false;
  monthlyBalance = 0;
  dateCtrl = '';
  monthlyData: any[];
  itemDetail: any[];

  private availableYears = [];

  constructor(private activeRoute: ActivatedRoute,
              private datePipe: DatePipe,
              private diarioService: DiarioService,
              private sumaryAnioService: SumaryAnioService,
              private snackbarService: SnackBarService,
              private translateService: TranslateService,
              private calculationService: CalculationService,
              private helperService: HelperService,
              public userService: UsersService,
              private modalCtrl: ModalController,
              private router: Router) { }

  async ngOnInit() {
    this.activeRoute.params
      .subscribe(async routeParams => {
        const dateUrl = this.getDateFromUrl();
        if (dateUrl === null) {
          this.router.navigate([UrlConstants.monthly, this.datePipe.transform(new Date(), 'yyyy-MM')]);
        } else {
          this.loading = true;
          await this.getData();
          await this.fillAvailablesYears();
          this.loading = false;

          this.setDateCtrl();
        }
      });
  }

  async getData(): Promise<void> {
    const fecha = this.getMonthStringFromUrl(true);

    const source$ = this.diarioService.getConceptosTotalMes(fecha);

    try {

      const data = await firstValueFrom(source$);

      this.monthlyData = data;
      this.monthlyBalance = this.getIngresos() - this.getEgresos();
    } catch (error) {
      this.loading = false;
      this.snackbarService.showSnackBarError(this.helperService.getErrorMessage(error));
    }
  }

  async openBalance(){
    this.loadingBalance = true;

    const saldos: ISaldoItem[] = [];

    const saldoItemMensual: ISaldoItem = {
      title: '' + this.helperService.toCamelCase(this.datePipe.transform(this.getDateFromUrl(), 'LLLL yyyy')),
      icon: 'calendar-clear-outline',
      ingresos: this.getIngresos(),
      egresos: this.getEgresos(),
      concept: 'mensual',
      date: this.getDateFromUrl()
    };

    saldos.push(saldoItemMensual);

    const source2$ = this.sumaryAnioService.getSumary(this.getDateFromUrl());

    try {

      const resultData = await combineLatest({
        anual: source2$
      })
      .pipe(
        map(response => {
          const anual = response.anual as SumaryAnio;
          const result: any = {};

          result.anual = anual;

          return result;
        })
      ).toPromise();

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
        cssClass: 'balance-modal-x2'
      });

      modal.onDidDismiss()
        .then((data) => {
          if (data.data){
          }
      });

      return await modal.present();

    } catch (error) {
      this.loadingBalance = false;
      this.snackbarService.showSnackBarError(this.helperService.getErrorMessage(error));
    }
  }

  async loadMonthDetails(row: any): Promise<void> {
    if (!row.detail.value){
      return;
    }

    this.loadingDetail = true;
    this.itemDetail = [];
    const fecha = this.getMonthStringFromUrl(true);

    const source$ = this.diarioService.getConceptosMovimMes(row.detail.value, fecha);

    try {
      const data = await firstValueFrom(source$);

      this.itemDetail = data;

      this.loadingDetail = false;
    } catch (error) {
      this.loading = false;
      this.snackbarService.showSnackBarError(this.helperService.getErrorMessage(error));
    }
  }

  async openDateModal(){
    const popupData: any = {};
    popupData.selected = this.datePipe.transform(this.getDateFromUrl(), 'yyyy-MM');
    popupData.years = this.availableYears;

    const modal = await this.modalCtrl.create({
      component: ModalDateMonthComponent,
      componentProps: { data: popupData },
      cssClass: 'date-month-modal'
    });

    modal.onDidDismiss()
      .then((data) => {
        if (data.data.selected){
          this.router.navigate([UrlConstants.monthly, data.data.selected]);
        }
    });

    return await modal.present();
  }

  favoriteClicked(event){
  }

  private getDateFromUrl(): Date {
    const dateUrl = this.activeRoute.snapshot.paramMap.get('month');
    if (dateUrl === null) {
      return null;
    }

    const year = dateUrl.split('-')[0];
    const month = dateUrl.split('-')[1];
    return new Date(Number(year), Number(month) - 1, 1);
  }

  private getMonthStringFromUrl(removeSeparator: boolean): string {
    if (removeSeparator) {
      return this.activeRoute.snapshot.paramMap.get('month')?.replace('-', '') ?? '';
    } else {
      return this.activeRoute.snapshot.paramMap.get('month') ?? '';
    }
  }

  private setDateCtrl() {
    this.dateCtrl = this.datePipe.transform(this.getDateFromUrl(), 'LLLL yyyy');
  }

  private async fillAvailablesYears(): Promise<void> {

    const stAvailabeYears = sessionStorage.getItem('availableYears');
    if(stAvailabeYears == null){

      const source$ = await this.diarioService.getPrimerConsumo();

      const data = await firstValueFrom(source$);

      const anioPrimerConsumo = Number(data.firstTransaction.substring(0, 4));
      const anioUltimoConsumo = Number(data.lastTransaction.substring(0, 4));

      for (let i = anioUltimoConsumo; i >= anioPrimerConsumo; i--) {
        this.availableYears.push(i);
      }

      sessionStorage.setItem('availableYears', this.availableYears.join(','));
    } else {
      this.availableYears = stAvailabeYears.split(',');
    }
  }

  private getIngresos(): number {
    return this.calculationService.getIngresos(this.convertToNumberArray(this.monthlyData));
  }

  private getEgresos(): number {
    return this.calculationService.getEgresos(this.convertToNumberArray(this.monthlyData));
  }

  private convertToNumberArray(dataIn: any[]): number[] {
    const importes: number[] = [];
    dataIn.forEach(value => {
      importes.push(value.balance);
    });

    return importes;
  }

}
