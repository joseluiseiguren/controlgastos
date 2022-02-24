/* eslint-disable no-throw-literal */
import { HelperService } from './../../services/helper.service.service';
import { SnackBarService } from './../../services/snackBar.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { firstValueFrom } from 'rxjs';
import { DiarioService } from 'src/services/diario.service';
import { IConceptoDiario } from 'src/models/concepto.diario';
import { UsersService } from 'src/services/users.service';
import { ModalController } from '@ionic/angular';
import { ModalDateComponent } from 'src/components/modal-date/modal-date.component';
import { DatePipe } from '@angular/common';
import { UrlConstants } from 'src/constants/url.constants';
import { CalculationService } from 'src/sharedServices/calculationService';
import { ModalDailyInputComponent } from 'src/components/modal-daily-input/modal-daily-input.component';

@Component({
  selector: 'app-daily',
  templateUrl: './daily.page.html',
  styleUrls: ['./daily.page.scss'],
})
export class DailyPage implements OnInit {
  loading = false;
  currentDate: Date;
  dateCtrl = '';
  conceptos: IConceptoDiario[];
  saldoDiario = 0;

  constructor(private diarioService: DiarioService,
              private snackBarService: SnackBarService,
              private modalCtrl: ModalController,
              public userService: UsersService,
              private calculationService: CalculationService,
              private datePipe: DatePipe,
              private router: Router,
              private helperService: HelperService,
              private activeRoute: ActivatedRoute) { }

  async ngOnInit() {
    this.activeRoute.params
      .subscribe(routeParams => {
        const controlDate = this.getDateFromUrl();
        controlDate.setMonth(controlDate.getMonth());
        this.currentDate = controlDate;
        this.setDateCtrl();

        this.getData();
      });
  }

  async getData(): Promise<void> {
    this.loading = true;

    const source$ = this.diarioService.getConceptosImportes(this.currentDate);

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
    const popupDate = this.datePipe.transform(new Date(this.currentDate), 'yyyy-MM-dd');

    const modal = await this.modalCtrl.create({
      component: ModalDateComponent,
      componentProps: { data: popupDate },
      cssClass: 'datetime-modal'
    });

    modal.onDidDismiss()
      .then((data) => {
        if (data.data){
          this.currentDate = new Date(data.data);
          this.setDateCtrl();
          this.router.navigate([UrlConstants.daily, this.datePipe.transform(new Date(this.currentDate), 'yyyy-MM-dd')]);
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

  private getDateFromUrl(): Date {
    const dateUrl = this.activeRoute.snapshot.paramMap.get('day')?.split('-');
    if (dateUrl === null || dateUrl === undefined) {
      throw 'DateUrl is NULL';
    }
    return new Date(Number(dateUrl[0]), Number(dateUrl[1])-1, Number(dateUrl[2]));
  }

  private setDateCtrl() {
    this.dateCtrl = this.datePipe.transform(new Date(this.currentDate), 'mediumDate');
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
