import { HelperService } from 'src/services/helper.service.service';
import { SnackBarService } from 'src/services/snackBar.service';
import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { firstValueFrom } from 'rxjs';
import { ModalDateMonthComponent } from 'src/components/mmodal-date-month/mmodal-date-month.component';
import { UrlConstants } from 'src/constants/url.constants';
import { DiarioService } from 'src/services/diario.service';

@Component({
  selector: 'app-monthly',
  templateUrl: './monthly.page.html',
  styleUrls: ['./monthly.page.scss'],
})
export class MonthlyPage implements OnInit {
  currentDate: Date;
  loading = false;
  loadingBalance = false;
  monthlyBalance = 0;
  dateCtrl = '';
  private; previousMonth = '';
  monthlyData: any[];

  private availableYears = [];

  constructor(private activeRoute: ActivatedRoute,
              private datePipe: DatePipe,
              private diarioService: DiarioService,
              private snackbarService: SnackBarService,
              private helperService: HelperService,
              private modalCtrl: ModalController,
              private router: Router) { }

  async ngOnInit() {
    this.activeRoute.params
      .subscribe(async routeParams => {
        const dateUrl = this.getDateFromUrl();
        if (dateUrl === null) {
          this.router.navigate([UrlConstants.monthly, this.datePipe.transform(new Date(), 'yyyy-MM')]);
        } else {
          this.currentDate = dateUrl;

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
      console.log(this.monthlyData);
      //this.saldoActual = this.getIngresos() - this.getEgresos();
    } catch (error) {
      this.loading = false;
      this.snackbarService.showSnackBarError(this.helperService.getErrorMessage(error));
    }
  }

  openBalance(){
  }

  async openDateModal(){
    const popupData: any = {};
    popupData.selected = this.datePipe.transform(new Date(this.currentDate), 'yyyy-MM');
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
    this.dateCtrl = this.datePipe.transform(new Date(this.currentDate), 'LLLL yyyy');
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

}
