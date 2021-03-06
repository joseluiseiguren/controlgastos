/* eslint-disable @typescript-eslint/prefer-for-of */
/* eslint-disable object-shorthand */
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Chart, registerables } from 'chart.js';
import { SumaryAnioService } from 'src/services/sumary-anio.service';
import { TranslateService } from '@ngx-translate/core';
import { ColorThemeService } from 'src/services/color-theme.service';

Chart.register(...registerables);

@Component({
  selector: 'app-modal-year-chart',
  templateUrl: './modal-year-chart.component.html',
  styleUrls: ['./modal-year-chart.component.scss'],
})
export class ModalYearChartComponent implements OnInit {

  @ViewChild('chart') private barCanvas: ElementRef;
  data: number;
  loading = false;

  constructor(private sumaryAnioService: SumaryAnioService,
              private colorThemeService: ColorThemeService,
              private translateService: TranslateService) { }

  async ngOnInit() {
    this.loading = true;
    const summary = await this.sumaryAnioService.getSumarySplittedByMonth(new Date(this.data, 1, 1)).toPromise();

    const income: number[] = [];
    const outcome: number[] = [];
    for (let i = 0; i < summary.length; i++) {
      income.push(summary[i].in);
      outcome.push(summary[i].out);
    }

    //Font color
    if (this.colorThemeService.getCurrentTheme() === 'dark'){
      Chart.defaults.color = 'white';
      Chart.defaults.borderColor = 'white';
    } else {
      Chart.defaults.color = 'black';
      Chart.defaults.borderColor = 'black';
    }

    const labels = [this.translateService.instant('monthShort.january'),
                    this.translateService.instant('monthShort.febraury'),
                    this.translateService.instant('monthShort.march'),
                    this.translateService.instant('monthShort.april'),
                    this.translateService.instant('monthShort.may'),
                    this.translateService.instant('monthShort.june'),
                    this.translateService.instant('monthShort.july'),
                    this.translateService.instant('monthShort.august'),
                    this.translateService.instant('monthShort.september'),
                    this.translateService.instant('monthShort.october'),
                    this.translateService.instant('monthShort.november'),
                    this.translateService.instant('monthShort.december')];

    this.loading = false;

    setTimeout(() => {
      const ctx = (document.getElementById('chart') as HTMLCanvasElement).getContext('2d');

      const chart = new Chart(ctx, {
            type: 'line',
            data: {
                labels: labels,
                datasets: [
                  {
                    label: this.translateService.instant('balance.income'),
                    data: income,
                    borderColor: getComputedStyle(document.documentElement).getPropertyValue('--ion-color-positive-amount'),
                    backgroundColor: getComputedStyle(document.documentElement).getPropertyValue('--ion-color-positive-amount'),
                    yAxisID: 'y'
                  },
                  {
                    label: this.translateService.instant('balance.outcome'),
                    data: outcome,
                    borderColor: getComputedStyle(document.documentElement).getPropertyValue('--ion-color-danger'),
                    backgroundColor: getComputedStyle(document.documentElement).getPropertyValue('--ion-color-danger'),
                    yAxisID: 'y1',
                  }
                ]
            },
            options: {
              responsive: true,
              interaction: {
                mode: 'index',
                intersect: false,
              },
              //stacked: false,
              plugins: {
                title: {
                  display: true,
                  text: this.translateService.instant('yearScreen.year') +  ' ' + this.data
                }
              },
              scales: {
                y: {
                  type: 'linear',
                  display: true,
                  position: 'left',
                  grid: {
                    drawOnChartArea: false, // only want the grid lines for one axis to show up
                    //color: getComputedStyle(document.documentElement).getPropertyValue('--ion-color-dark-tint')
                    //color: 'yellow',
                    drawBorder: true
                  },
                },
                y1: {
                  type: 'linear',
                  display: true,
                  position: 'right',

                  // grid line settings
                  grid: {
                    drawOnChartArea: false, // only want the grid lines for one axis to show up
                    //color: getComputedStyle(document.documentElement).getPropertyValue('--ion-color-dark-tint')
                    //color: 'blue',
                    drawBorder: true
                  },
                },
              }
            }
      });
    }, 100);
  }

}
