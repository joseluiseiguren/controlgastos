import { SumaryMonth } from './../../models/sumaryMonth';
import { Component, OnInit } from '@angular/core';
import { DiarioService } from '../../services/diario.service';
import { IConceptoDiario } from '../../models/concepto.diario';
import { UsersService } from '../../services/users.service';
import { HelperService } from '../../services/helper.service';
import { DiarioEnterComponent } from '../diario-enter/diario-enter.component';
import { FormControl } from '@angular/forms';
import { SaldoAbiertoComponent } from '../saldo-abierto/saldo-abierto.component';
import { ISaldoItem } from '../../models/saldoItem';
import { DatePipe } from '@angular/common';
import { SumaryMonthService } from '../../services/sumary-month.service';
import { SumaryAnioService } from '../../services/sumary-anio.service';
import { combineLatest, firstValueFrom, map } from 'rxjs';
import { CalculationService } from '../../sharedServices/calculationService';
import { ActivatedRoute, Router } from '@angular/router';
import { UrlConstants } from '../../constants/url.constants';
import { Location } from '@angular/common';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';
import { MatDatepickerInputEvent } from '@angular/material/datepicker';
import { SumaryAnio } from '../../models/sumaryAnio';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-diario',
  templateUrl: './diario.component.html',
  styleUrls: ['./diario.component.css']
})
export class DiarioComponent implements OnInit {
  conceptos: IConceptoDiario[];
  loading: Boolean = false;
  loadingPopup: Boolean = false;
  displayedColumns: string[] = ['descripcion', 'importe'];
  currentDate: FormControl;
  saldoDiario = 0;

  get dailyBalanceTitle() : string {
    return this.translate.instant('dailyScreen.dailyBalance');
  }

  constructor(private _conceptosDiarioService: DiarioService,
              public _userService: UsersService,
              private _helperService: HelperService,
              private datePipe: DatePipe,
              public snackBar: MatSnackBar,
              private _sumaryMonthService: SumaryMonthService,
              private _sumaryAnioService: SumaryAnioService,
              private calculationService: CalculationService,
              private activeRoute: ActivatedRoute,
              private router: Router,
              private location: Location,
              public enterDiario: MatDialog,
              public translate: TranslateService,
              public saldoAbierto: MatDialog) {}

  ngOnInit() {
    this.activeRoute.params
      .subscribe(routeParams => {
        const controlDate = this.getDateFromUrl();
        controlDate.setMonth(controlDate.getMonth() - 1);
        this.currentDate = new FormControl(controlDate);

        this.getData();
      });
  }

  changeDate(type: string, event: MatDatepickerInputEvent<Date>): void {
    const newDate = this.datePipe.transform(event.value, 'yyyy-MM-dd');
    this.router.navigate([UrlConstants.DASHBOARD, UrlConstants.DIARIO, newDate]);
  }

  async getData(): Promise<void> {
    this.loading = true;

    const source$ = this._conceptosDiarioService.getConceptosImportes(this.currentDate.value);

    try {
      const data = await firstValueFrom(source$);

      this.conceptos = data;
      this.saldoDiario = this.getIngresos() - this.getEgresos();
      this.loading = false;

    } catch (error) {
      this.loading = false;
      this._helperService.showSnackBarError(this.snackBar, this._helperService.getErrorMessage(error));
    }
  }

  openConcepto(concepto: IConceptoDiario): void {
    const dialogRef = this.enterDiario.open(DiarioEnterComponent, { data: {concepto}, width: '300px', });

    dialogRef.afterClosed()
      .subscribe(result => {
        this.saldoDiario = this.getIngresos() - this.getEgresos();
      });
  }

  private getIngresos(): number {
    return this.calculationService.getIngresos(this.convertToNumberArray(this.conceptos));
  }

  private getEgresos(): number {
    return this.calculationService.getEgresos(this.convertToNumberArray(this.conceptos));
  }

  public showOpenSaldo(): void {
    this.loadingPopup = true;
    const saldos: ISaldoItem[] = [];

    const saldoItemDiario: ISaldoItem = {
      title: '' + this._helperService.toCamelCase(this.datePipe.transform(new Date(this.currentDate.value),
             'mediumDate')),
      icon: 'today',
      ingresos: this.getIngresos(),
      egresos: this.getEgresos(),
      concept: 'diario',
      date: new Date(this.currentDate.value)
    };

    saldos.push(saldoItemDiario);

    const source1$ = this._sumaryMonthService.getSumary(this.currentDate.value);
    const source2$ = this._sumaryAnioService.getSumary(this.currentDate.value);

    try {

      combineLatest({
        mensual: source1$,
        anual: source2$
      })
      .pipe(
        map(response => {
          const mensual = <SumaryMonth>response.mensual;
          const anual = <SumaryAnio>response.anual;
          const result: any = {};

          result.mensual = mensual;
          result.anual = anual;

          return result;
        })
      )
      .subscribe((data) => {

        const saldoItemMensual: ISaldoItem = {
          title: '' + this._helperService.toCamelCase(this.datePipe.transform(new Date(this.currentDate.value),
                 'LLLL yyyy')),
          icon: 'calendar_today',
          ingresos: data.mensual.in,
          egresos: data.mensual.out,
          concept: 'mensual',
          date: new Date(this.currentDate.value)
        };
        saldos.push(saldoItemMensual);

        const saldoItemAnual: ISaldoItem = {
          title: this.translate.instant('dailyScreen.year') + ' ' + this.datePipe.transform(new Date(this.currentDate.value), 'yyyy'),
          icon: 'airplay',
          ingresos: data.anual.in,
          egresos: data.anual.out,
          concept: 'mensual',
          date: new Date(this.currentDate.value)
        };
        saldos.push(saldoItemAnual);

        this.loadingPopup = false;
        const dialogRef = this.saldoAbierto.open(SaldoAbiertoComponent, { width: '500px', data: {saldos} });

        dialogRef.componentInstance.itemPushed
          .subscribe((item: ISaldoItem) => {
            if (item.date === null || item.concept === UrlConstants.DIARIO) {
              return;
            }

            dialogRef.close();

            if (item.concept === UrlConstants.ANUAL) {
              this.router.navigate([UrlConstants.DASHBOARD, item.concept, item.date.getFullYear(), 'none']);
            } else {
              this.router.navigate([UrlConstants.DASHBOARD, item.concept, item.date.toISOString(), 'none']);
            }
          });
      });
    } catch (error) {
      this.loading = false;
      this._helperService.showSnackBarError(this.snackBar, this._helperService.getErrorMessage(error));
    }
  }

  private convertToNumberArray(dataIn: IConceptoDiario[]): number[] {
    const importes: number[] = [];
    dataIn.forEach(function (value) {
      importes.push(value.ammount);
    });

    return importes;
  }

  private getDateFromUrl(): Date {
    const dateUrl = this.activeRoute.snapshot.paramMap.get('day')?.split('-');
    if (dateUrl === null || dateUrl === undefined) {
      throw 'DateUrl is NULL';
    }
    return new Date(Number(dateUrl[0]), Number(dateUrl[1]), Number(dateUrl[2]));
  }



}
