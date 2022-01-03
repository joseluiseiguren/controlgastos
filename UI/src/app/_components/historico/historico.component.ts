import { Component, OnInit } from '@angular/core';
import { DiarioService } from '../../services/diario.service';
import { UsersService } from '../../services/users.service';
import { HelperService } from '../../services/helper.service';
import { CalculationService } from '../../sharedServices/calculationService';
import { firstValueFrom } from 'rxjs';
import { ISaldoItem } from '../../models/saldoItem';
import { SaldoAbiertoComponent } from '../saldo-abierto/saldo-abierto.component';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-historico',
  templateUrl: './historico.component.html',
  styleUrls: ['./historico.component.css']
})
export class HistoricoComponent implements OnInit {
  conceptosTotales: any[];
  itemDetail: any[];
  loading = false;
  loadingDetail = false;
  saldoActual = 0;

  get historicalBalanceTitle(): string {
    return this.translate.instant('historical.balance');
  }

  constructor(private _diarioService: DiarioService,
              public _userService: UsersService,
              private calculationService: CalculationService,
              public snackBar: MatSnackBar,
              public saldoAbierto: MatDialog,
              public translate: TranslateService,
              private _helperService: HelperService) {
  }

  ngOnInit() {
    this.getData();
  }

  private getIngresos(): number {
    return this.calculationService.getIngresos(this.convertToNumberArray(this.conceptosTotales));
  }

  private getEgresos(): number {
    return this.calculationService.getEgresos(this.convertToNumberArray(this.conceptosTotales));
  }

  async getData(): Promise<void> {
    this.loading = true;

    const source$ = this._diarioService.getConceptosTotalHistorico();

    try {
      const data = await firstValueFrom(source$);

      this.conceptosTotales = data;
      this.saldoActual = this.getIngresos() - this.getEgresos();
      this.loading = false;

    } catch (error) {
      this.loading = false;
      this._helperService.showSnackBarError(this.snackBar, this._helperService.getErrorMessage(error));
    }
  }

  private convertToNumberArray(dataIn: any[]): number[] {
    if (dataIn !== undefined) {
      const importes: number[] = [];
      dataIn.forEach(function (value) {
        importes.push(value.balance);
      });

      return importes;
    }
  }

  async loadHistoricDetails(row: any): Promise<void> {
    this.loadingDetail = true;
    this.itemDetail = undefined;

    const source$ = this._diarioService.getConceptosMovimHistorico(row.conceptId);

    try {
      const data = await firstValueFrom(source$);

      this.itemDetail = data;
      this.loadingDetail = false;

    } catch (error) {
      this.loading = false;
      this._helperService.showSnackBarError(this.snackBar, this._helperService.getErrorMessage(error));
    }
  }

  showOpenSaldo() {
    const saldos: ISaldoItem[] = [];

    const saldoItemHistorico: ISaldoItem = {
      title: this.translate.instant('historical.historical'),
      icon: 'blur_linear',
      ingresos: this.getIngresos(),
      egresos: this.getEgresos(),
      concept: 'historico',
      date: null
    };
    saldos.push(saldoItemHistorico);

    this.saldoAbierto.open(SaldoAbiertoComponent, { width: '500px', data: {saldos} });
  }

}
