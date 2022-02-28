import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { TranslateService } from '@ngx-translate/core';
import { firstValueFrom } from 'rxjs';
import { ModalBalanceComponent } from 'src/components/modal-balance/modal-balance.component';
import { ISaldoItem } from 'src/models/saldoItem';
import { DiarioService } from 'src/services/diario.service';
import { HelperService } from 'src/services/helper.service.service';
import { SnackBarService } from 'src/services/snackBar.service';
import { UsersService } from 'src/services/users.service';
import { CalculationService } from 'src/sharedServices/calculationService';

@Component({
  selector: 'app-historical',
  templateUrl: './historical.page.html',
  styleUrls: ['./historical.page.scss'],
})
export class HistoricalPage implements OnInit {
  loading = false;
  loadingBalance = false;
  loadingDetail = false;
  historicalBalance = 0;
  historicData: any[];
  itemDetail: any[];

  constructor(private datePipe: DatePipe,
              private snackbarService: SnackBarService,
              private translateService: TranslateService,
              private calculationService: CalculationService,
              private helperService: HelperService,
              public userService: UsersService,
              private diarioService: DiarioService,
              private modalCtrl: ModalController) { }

  async ngOnInit() {
    this.loading = true;
    await this.getData();
    this.loading = false;
  }

  async openBalance(){
    this.loadingBalance = true;

    const saldos: ISaldoItem[] = [];

    const saldoItemHistoric: ISaldoItem = {
      title: this.translateService.instant('historical.historical'),
      icon: 'apps-outline',
      ingresos: this.getIngresos(),
      egresos: this.getEgresos(),
      concept: 'mensual',
      date: null
    };

    saldos.push(saldoItemHistoric);

    this.loadingBalance = false;

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

  favoriteClicked(event){
  }

  async loadHistoricDetails(row){
    if (!row.detail.value){
      return;
    }

    this.loadingDetail = true;

    this.itemDetail = [];

    const source$ = this.diarioService.getConceptosMovimHistorico(row.detail.value);

    try {
      const data = await firstValueFrom(source$);

      this.itemDetail = data;

      this.loadingDetail = false;
    } catch (error) {
      this.loading = false;
      this.snackbarService.showSnackBarError(this.helperService.getErrorMessage(error));
    }
  }

  private async getData(): Promise<void> {
    this.loading = true;

    const source$ = this.diarioService.getConceptosTotalHistorico();

    try {
      const data = await firstValueFrom(source$);

      this.historicData = data;
      this.historicalBalance = this.getIngresos() - this.getEgresos();

      this.loading = false;

    } catch (error) {
      this.loading = false;
      this.snackbarService.showSnackBarError(this.helperService.getErrorMessage(error));
    }
  }

  private getIngresos(): number {
    return this.calculationService.getIngresos(this.convertToNumberArray(this.historicData));
  }

  private getEgresos(): number {
    return this.calculationService.getEgresos(this.convertToNumberArray(this.historicData));
  }

  private convertToNumberArray(dataIn: any[]): number[] {
    if (dataIn !== undefined) {
      const importes: number[] = [];
      dataIn.forEach(value => {
        importes.push(value.balance);
      });

      return importes;
    }

    return [];
  }

}
