import { UsersService } from 'src/services/users.service';
import { HelperService } from 'src/services/helper.service.service';
import { SnackBarService } from 'src/services/snackBar.service';
import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { ModalDateMonthComponent } from 'src/components/mmodal-date-month/mmodal-date-month.component';
import { UrlConstants } from 'src/constants/url.constants';
import { DiarioService } from 'src/services/diario.service';
import { CalculationService } from 'src/sharedServices/calculationService';
import { ISaldoItem } from 'src/models/saldoItem';
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
  private monthlyDataOriginal: any[];

  private filterFavoriteOn = false;
  private filterHideceroOn = false;

  private selectedDate: Date;

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
    let dateUrl = this.getDateFromUrl();
    if (dateUrl === null) {
      dateUrl = new Date();
    }

    this.loading = true;
    this.selectedDate = dateUrl;
    await this.getData();
    await this.fillAvailablesYears();
    this.loading = false;

    this.setDateCtrl();
  }

  async getData(): Promise<void> {
    const fecha = this.datePipe.transform(this.selectedDate, 'yyyyMM');

    try {

      const data = await this.diarioService.getConceptosTotalMes(fecha).toPromise();

      this.monthlyData = data;
      this.monthlyDataOriginal = data;

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
      title: '' + this.helperService.toCamelCase(this.datePipe.transform(this.selectedDate, 'LLLL yyyy')),
      icon: 'calendar-clear-outline',
      ingresos: this.getIngresos(),
      egresos: this.getEgresos(),
      concept: 'mensual',
      date: this.selectedDate
    };

    saldos.push(saldoItemMensual);

    try {

      const resultData = await this.sumaryAnioService.getSumary(this.selectedDate).toPromise();

      const saldoItemAnual: ISaldoItem = {
        title: this.translateService.instant('dailyScreen.year') + ' ' + this.datePipe.transform(this.selectedDate, 'yyyy'),
        icon: 'albums-outline',
        ingresos: resultData.in,
        egresos: resultData.out,
        concept: 'mensual',
        date: this.selectedDate
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
    const fecha = this.datePipe.transform(this.selectedDate, 'yyyyMM');

    try {
      const data = await this.diarioService.getConceptosMovimMes(row.detail.value, fecha).toPromise();

      this.itemDetail = data;

      this.loadingDetail = false;
    } catch (error) {
      this.loading = false;
      this.snackbarService.showSnackBarError(this.helperService.getErrorMessage(error));
    }
  }

  async openDateModal(){
    const popupData: any = {};
    popupData.selected = this.datePipe.transform(this.selectedDate, 'yyyy-MM');
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

  favoriteClicked(event: boolean) {
    this.filterFavoriteOn = event;
    this.applyFilters();
  }

  hideceroClicked(event: boolean) {
    this.filterHideceroOn = event;
    this.applyFilters();
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

  private setDateCtrl() {
    this.dateCtrl = this.datePipe.transform(this.selectedDate, 'LLLL yyyy');
  }

  private async fillAvailablesYears(): Promise<void> {

    const stAvailabeYears = sessionStorage.getItem('availableYears');
    if(stAvailabeYears == null){

      const data = await this.diarioService.getPrimerConsumo().toPromise();

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
    return this.calculationService.getIngresos(this.convertToNumberArray(this.monthlyDataOriginal));
  }

  private getEgresos(): number {
    return this.calculationService.getEgresos(this.convertToNumberArray(this.monthlyDataOriginal));
  }

  private convertToNumberArray(dataIn: any[]): number[] {
    const importes: number[] = [];
    dataIn.forEach(value => {
      importes.push(value.balance);
    });

    return importes;
  }

  private applyFilters(){
    this.monthlyData = this.monthlyDataOriginal;

    if (this.filterFavoriteOn === true || this.filterHideceroOn === true){
      if (this.filterFavoriteOn === true){
        this.monthlyData = this.monthlyData.filter(x => x.favorite === true);
      }
      if (this.filterHideceroOn === true){
        this.monthlyData = this.monthlyData.filter(x => this.filterHideceroOn === true && x.balance !== 0);
      }
    }
  }

}
