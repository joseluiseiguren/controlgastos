import { IMensualFilter } from './../../models/mensual.filter';
import { ComponentBase } from './../../services/componentBase';
import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { UsersService } from '../../services/users.service';
import { HelperService } from '../../services/helper.service';
import { DatePipe } from '@angular/common';
import { DiarioService } from '../../services/diario.service';
import { firstValueFrom } from 'rxjs';
import { ISaldoItem } from '../../models/saldoItem';
import { SumaryAnioService } from '../../services/sumary-anio.service';
import { SaldoAbiertoComponent } from '../saldo-abierto/saldo-abierto.component';
import { MomentDateAdapter, MAT_MOMENT_DATE_ADAPTER_OPTIONS } from '@angular/material-moment-adapter';
import { DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE } from '@angular/material/core';
import { Moment } from 'moment';
import { CalculationService } from '../../sharedServices/calculationService';
import { ActivatedRoute, Router } from '@angular/router';
import { UrlConstants } from '../../constants/url.constants';
import { FormControl } from '@angular/forms';
import { MediaMatcher } from '@angular/cdk/layout';
import { Location } from '@angular/common';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';
import { MatDatepicker } from '@angular/material/datepicker';
import { TranslateService } from '@ngx-translate/core';

export const MY_FORMATS = {
  parse: {
    dateInput: 'MM/YYYY',
  },
  display: {
    dateInput: 'MM/YYYY',
    monthYearLabel: 'MMM YYYY',
    dateA11yLabel: 'LL',
    monthYearA11yLabel: 'MMMM YYYY',
  },
};

@Component({
  selector: 'app-mensual',
  templateUrl: './mensual.component.html',
  styleUrls: ['./mensual.component.css'],
  providers: [
    {
      provide: DateAdapter,
      useClass: MomentDateAdapter,
      deps: [MAT_DATE_LOCALE, MAT_MOMENT_DATE_ADAPTER_OPTIONS]
    },

    {provide: MAT_DATE_FORMATS, useValue: MY_FORMATS},
  ],
})
export class MensualComponent extends ComponentBase implements OnInit {
  loading = false;
  loadingDetail = false;
  loadingPopup = false;
  private _conceptosTotales: any[];
  conceptosFiltered: any[];
  itemDetail: any[];
  saldoActual = 0;
  currentDate = new FormControl();
  private previousMonth = '';
  private filters: IMensualFilter;

  get monthlyBalanceTitleMobile(): string {
    return this.translate.instant('monthly.balanceMobile');
  }

  get monthlyBalanceTitle(): string {
    return this.translate.instant('monthly.balance');
  }

  constructor(changeDetectorRef: ChangeDetectorRef,
              private location: Location,
              private media: MediaMatcher,
              private _datePipe: DatePipe,
              public _userService: UsersService,
              private _diarioService: DiarioService,
              public snackBar: MatSnackBar,
              private _sumaryAnioService: SumaryAnioService,
              public saldoAbierto: MatDialog,
              private activeRoute: ActivatedRoute,
              private router: Router,
              private changeDetector: ChangeDetectorRef,
              private calculationService: CalculationService,
              public translate: TranslateService,
              private _helperService: HelperService) {
    super(changeDetectorRef, media);
  }

  ngOnInit() {
    this.activeRoute.params
      .subscribe(routeParams => {
        const controlDate = this.getDateFromUrl();
        controlDate.setMonth(controlDate.getMonth());
        this.currentDate = new FormControl(controlDate);

        if (this.previousMonth !== this.getMonthStringFromUrl(false)) {
          this.previousMonth = this.getMonthStringFromUrl(false);
          this.getData();
        }
      });
  }

  async getData(): Promise<void> {
    this.loading = true;
    const fecha = this.getMonthStringFromUrl(true);

    const source$ = this._diarioService.getConceptosTotalMes(fecha);

    try {

      const data = await firstValueFrom(source$);

      this._conceptosTotales = data;
      this.applyFilters();
      this.saldoActual = this.getIngresos() - this.getEgresos();
      this.loading = false;

      setTimeout(function (itemToScroll: string) {
        if (itemToScroll === 'none') {
          return;
        }

        const elmnt = document.getElementById('item' + itemToScroll);
        elmnt.scrollIntoView({block: 'start', behavior: 'auto'});

        const tt = document.getElementById('mainTable');
        tt.scrollTop = tt.scrollTop - 30;
      }, 1, this.getOpenItem());

    } catch (error) {
      this.loading = false;
      this._helperService.showSnackBarError(this.snackBar, this._helperService.getErrorMessage(error));
    }

  }

  private getIngresos(): number {
    return this.calculationService.getIngresos(this.convertToNumberArray(this.conceptosFiltered));
  }

  private getEgresos(): number {
    return this.calculationService.getEgresos(this.convertToNumberArray(this.conceptosFiltered));
  }

  async showOpenSaldo(): Promise<void> {
    this.loadingPopup = true;
    const saldos: ISaldoItem[] = [];

    const saldoItemMensual: ISaldoItem = {
      title: '' + this._helperService.toCamelCase(this._datePipe.transform(this.getDateFromUrl(), 'LLLL yyyy')),
      icon: 'calendar_today',
      ingresos: this.getIngresos(),
      egresos: this.getEgresos(),
      concept: 'mensual',
      date: this.getDateFromUrl()
    };
    saldos.push(saldoItemMensual);

    const source$ = this._sumaryAnioService.getSumary(this.getDateFromUrl());

    try {
      const anual = await firstValueFrom(source$);

      const saldoItemAnual: ISaldoItem = {
        title: this.translate.instant('monthly.year') + ' ' + this._datePipe.transform(this.getDateFromUrl(), 'yyyy'),
        icon: 'airplay',
        ingresos: anual.in,
        egresos: anual.out,
        concept: 'anual',
        date: this.getDateFromUrl()
      };
      saldos.push(saldoItemAnual);

      const dialogRef = this.saldoAbierto.open(SaldoAbiertoComponent, { width: '500px', data: {saldos} });
      this.loadingPopup = false;

      dialogRef.componentInstance.itemPushed
        .subscribe((item: ISaldoItem) => {
          if (item.concept === UrlConstants.MENSUAL) {
            return;
          }
          this.router.navigate([UrlConstants.DASHBOARD, item.concept, item.date.getFullYear(), 'none']);
          dialogRef.close();
        });

    } catch (error) {
      this.loading = false;
      this._helperService.showSnackBarError(this.snackBar, this._helperService.getErrorMessage(error));
    }

  }

  chosenMonthHandler(normalizedMonth: Moment, datepicker: MatDatepicker<Moment>): void {
    const newMonth = this._datePipe.transform(normalizedMonth.toDate(), 'yyyy-MM');

    const activeRouteOpen = this.getOpenItem();
    this.router.navigate([UrlConstants.DASHBOARD, UrlConstants.MENSUAL, newMonth, activeRouteOpen]);
    datepicker.close();
  }

  async loadMonthDetails(row: any): Promise<void> {
    this.loadingDetail = true;
    this.itemDetail = undefined;
    const fecha = this.getMonthStringFromUrl(true);

    const source$ = this._diarioService.getConceptosMovimMes(row.conceptId, fecha);

    try {
      const data = await firstValueFrom(source$);

      this.itemDetail = data;
      this.loadingDetail = false;
      const activeRouteMonth = this.getMonthStringFromUrl(false);
      this.router.navigate([UrlConstants.DASHBOARD, UrlConstants.MENSUAL, activeRouteMonth, row.description],
                            {replaceUrl: false});

    } catch (error) {
      this.loading = false;
      this._helperService.showSnackBarError(this.snackBar, this._helperService.getErrorMessage(error));
    }
  }

  getOpenItem(): string {
    return this.activeRoute.snapshot.paramMap.get('open');
  }

  private convertToNumberArray(dataIn: any[]): number[] {
    const importes: number[] = [];
    dataIn.forEach(function (value) {
      importes.push(value.balance);
    });

    return importes;
  }

  private getDateFromUrl(): Date {
    const dateUrl = this.activeRoute.snapshot.paramMap.get('month');

    const year = dateUrl.split('-')[0];
    const month = dateUrl.split('-')[1];
    return new Date(Number(year), Number(month) - 1, 1);
  }

  private getMonthStringFromUrl(removeSeparator: boolean): string {
    if (removeSeparator) {
      return this.activeRoute.snapshot.paramMap.get('month').replace('-', '');
    } else {
      return this.activeRoute.snapshot.paramMap.get('month');
    }
  }

  public onfiltersChanged(filters: IMensualFilter) {
    this.filters = filters;
    this.applyFilters();
    this.saldoActual = this.getIngresos() - this.getEgresos();
  }

  private applyFilters() {
    if (this.filters !== undefined && this.filters.conceptos.length > 0) {
      this.conceptosFiltered = this._conceptosTotales.filter(x => this.filters.conceptos.find(p => p.id === x.idConcepto) );
    } else {
      this.conceptosFiltered = this._conceptosTotales.filter(x => true);
    }
  }
}

