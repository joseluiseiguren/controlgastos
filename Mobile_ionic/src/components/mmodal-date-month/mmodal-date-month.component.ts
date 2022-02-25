import { TranslateService } from '@ngx-translate/core';
import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-mmodal-date-month',
  templateUrl: './mmodal-date-month.component.html',
  styleUrls: ['./mmodal-date-month.component.scss'],
})
export class ModalDateMonthComponent implements OnInit {
  data: any;
  selectedYear: number;
  selectedMonth: number;

  months = [this.tranlateService.instant('monthPicker.january'),
            this.tranlateService.instant('monthPicker.febraury'),
            this.tranlateService.instant('monthPicker.march'),
            this.tranlateService.instant('monthPicker.april'),
            this.tranlateService.instant('monthPicker.may'),
            this.tranlateService.instant('monthPicker.june'),
            this.tranlateService.instant('monthPicker.july'),
            this.tranlateService.instant('monthPicker.august'),
            this.tranlateService.instant('monthPicker.september'),
            this.tranlateService.instant('monthPicker.october'),
            this.tranlateService.instant('monthPicker.november'),
            this.tranlateService.instant('monthPicker.december')];
  years = [];

  constructor(private modalCtrl: ModalController,
              private datePipe: DatePipe,
              private tranlateService: TranslateService) { }

  ngOnInit() {
    if (this.data.selected === '') {
      this.selectedYear = new Date().getFullYear();
      this.selectedMonth = new Date().getMonth();
    } else {
      const dataSplitted = this.data.selected.split('-');
      this.selectedYear = Number(dataSplitted[0]);
      this.selectedMonth = Number(dataSplitted[1])-1;
    }

    this.data.years.forEach(element => {
      this.years.push(element);
    });

  }

  onMonthChange(selectedValue: any) {
    this.selectedMonth = selectedValue.detail.value ;
  }

  onYearChange(selectedValue: any) {
    this.selectedYear = selectedValue.detail.value ;
  }

  async closeModal(){
    const modal = await this.modalCtrl.getTop();
    if (modal) {
      modal.dismiss();
    }
  }

  async onSubmit(){
    const modal = await this.modalCtrl.getTop();
    if (modal) {
      this.data.selected = this.datePipe.transform(new Date(this.selectedYear, this.selectedMonth, 1), 'yyyy-MM');
      modal.dismiss(this.data);
    }
  }
}
