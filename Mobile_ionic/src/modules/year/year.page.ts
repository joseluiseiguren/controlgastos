import { DatePipe } from '@angular/common';
import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { TranslateService } from '@ngx-translate/core';
import { ModalBalanceComponent } from 'src/components/modal-balance/modal-balance.component';
import { ModalYearChartComponent } from 'src/components/modal-year-chart/modal-year-chart.component';
import { UrlConstants } from 'src/constants/url.constants';
import { ISaldoItem } from 'src/models/saldoItem';
import { DiarioService } from 'src/services/diario.service';
import { HelperService } from 'src/services/helper.service.service';
import { SnackBarService } from 'src/services/snackBar.service';
import { UsersService } from 'src/services/users.service';
import { CalculationService } from 'src/sharedServices/calculationService';

@Component({
  selector: 'app-year',
  templateUrl: './year.page.html',
  styleUrls: ['./year.page.scss'],
})
export class YearPage implements OnInit {
  loading = false;
  loadingBalance = false;
  loadingDetail = false;
  annualBalance = 0;
  yearData: any[];
  itemDetail: any[];
  years = [];
  selectedYear: number;
  loadingHackYearDropdown = true;

  private yearDataOriginal: any[];

  private filterFavoriteOn = false;
  private filterHideceroOn = false;

  constructor(private activeRoute: ActivatedRoute,
              private datePipe: DatePipe,
              private snackbarService: SnackBarService,
              private translateService: TranslateService,
              private calculationService: CalculationService,
              private helperService: HelperService,
              public userService: UsersService,
              private diarioService: DiarioService,
              private cdr: ChangeDetectorRef,
              private modalCtrl: ModalController,
              private router: Router) { }

  async ngOnInit() {
    let yearUrl = this.getYearFromUrl();
    if (yearUrl === null) {
      yearUrl = new Date().getFullYear();
    }

    this.loading = true;
    await this.fillAvailablesYears();
    this.selectedYear = yearUrl;
    await this.getData();
    this.loading = false;

    setTimeout(() => {
      this.selectedYear = 0;
      this.cdr.detectChanges();
      this.selectedYear = yearUrl;
      this.cdr.detectChanges();
      this.loadingHackYearDropdown = false;
    }, 200);
  }

  favoriteClicked(event: boolean) {
    this.filterFavoriteOn = event;
    this.applyFilters();
  }

  hideceroClicked(event: boolean) {
    this.filterHideceroOn = event;
    this.applyFilters();
  }

  async openYearChart(){
    window.screen.orientation.lock('landscape');
    const modal = await this.modalCtrl.create({
      component: ModalYearChartComponent,
      componentProps: { data: this.selectedYear },
      cssClass: 'chart-year-modal'
    });

    modal.onDidDismiss()
      .then((data) => {
        window.screen.orientation.unlock();
    });

    return await modal.present();
  }

  async openBalance(){
    this.loadingBalance = true;

    const saldos: ISaldoItem[] = [];

    const saldoItemAnual: ISaldoItem = {
      title: this.translateService.instant('dailyScreen.year') + ' ' + this.selectedYear,
      icon: 'albums-outline',
      ingresos: this.getIngresos(),
      egresos: this.getEgresos(),
      concept: 'mensual',
      date: new Date(this.selectedYear, 1, 1)
    };

    saldos.push(saldoItemAnual);

    this.loadingBalance =false;

    const modal = await this.modalCtrl.create({
      component: ModalBalanceComponent,
      componentProps: { data: saldos },
      cssClass: 'balance-modal-x1'
    });

    modal.onDidDismiss()
      .then((data) => {
        if (data.data){
        }
    });

    return await modal.present();
  }

  onYearChange(event){
    if (this.loadingHackYearDropdown === false){
      this.router.navigate([UrlConstants.year, event.detail.value]);
    }
  }

  async loadYearDetails(row: any): Promise<void> {
    if (!row.detail.value){
      return;
    }

    this.loadingDetail = true;

    this.itemDetail = [];

    try {
      const data = await this.diarioService.getConceptosMovimAnio(row.detail.value, this.selectedYear).toPromise();

      this.itemDetail = data;

      this.itemDetail.forEach((element) => {
        const fecha = this.helperService.convertStringMMYYYYToDate(element.month);
        element.MonthFormatted = this.helperService.toCamelCase(this.datePipe.transform(fecha, 'LLLL yyyy'));
      });

      this.loadingDetail = false;
    } catch (error) {
      this.loading = false;
      this.snackbarService.showSnackBarError(this.helperService.getErrorMessage(error));
    }
  }

  private getYearFromUrl(): number {
    const yearUrl = this.activeRoute.snapshot.paramMap.get('anio');
    if (yearUrl === null) {
      return null;
    }

    return Number(yearUrl);
  }

  private async fillAvailablesYears(): Promise<void> {

    const stAvailabeYears = sessionStorage.getItem('availableYears');
    if(stAvailabeYears == null){

      const data = await this.diarioService.getPrimerConsumo().toPromise();

      const anioPrimerConsumo = Number(data.firstTransaction.substring(0, 4));
      const anioUltimoConsumo = Number(data.lastTransaction.substring(0, 4));

      for (let i = anioUltimoConsumo; i >= anioPrimerConsumo; i--) {
        this.years.push(i);
      }

      sessionStorage.setItem('availableYears', this.years.join(','));
    } else {
      this.years = stAvailabeYears.split(',');
    }
  }

  private async getData(): Promise<void> {
    this.loading = true;

    try {
      const data = await this.diarioService.getConceptosTotalAnio(this.selectedYear).toPromise();

      this.yearData = data;
      this.yearDataOriginal = data;

      this.annualBalance = this.getIngresos() - this.getEgresos();

      this.loading = false;

    } catch (error) {
      this.loading = false;
      this.snackbarService.showSnackBarError(this.helperService.getErrorMessage(error));
    }
  }

  private getIngresos(): number {
    return this.calculationService.getIngresos(this.convertToNumberArray(this.yearDataOriginal));
  }

  private getEgresos(): number {
    return this.calculationService.getEgresos(this.convertToNumberArray(this.yearDataOriginal));
  }

  private convertToNumberArray(dataIn: any[]): number[] {
    if (dataIn !== undefined){
      const importes: number[] = [];
      dataIn.forEach(value => {
        importes.push(value.balance);
      });

      return importes;
    }

    return [];
  }

  private applyFilters(){
    this.yearData = this.yearDataOriginal;

    if (this.filterFavoriteOn === true || this.filterHideceroOn === true){
      if (this.filterFavoriteOn === true){
        this.yearData = this.yearData.filter(x => x.favorite === true);
      }
      if (this.filterHideceroOn === true){
        this.yearData = this.yearData.filter(x => this.filterHideceroOn === true && x.balance !== 0);
      }
    }
  }

}
