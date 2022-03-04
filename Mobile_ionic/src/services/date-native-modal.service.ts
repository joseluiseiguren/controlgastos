import { Injectable } from '@angular/core';
import { Plugins } from '@capacitor/core';
import { DatePickerPluginInterface } from '@capacitor-community/date-picker';
import { ColorThemeService } from 'src/services/color-theme.service';
import { TranslateService } from '@ngx-translate/core';
import { DatePipe } from '@angular/common';


@Injectable({
  providedIn: 'root'
})
export class DateNativeModalService {

  constructor(private colorThemeService: ColorThemeService,
              private datePipe: DatePipe,
              private translateService: TranslateService) { }

  async openDateModal(selectedDate: Date, userLocale: string): Promise<Date | undefined> {
    const datePicker: DatePickerPluginInterface = Plugins.DatePickerPlugin as any;

    const popupDate = this.datePipe.transform(selectedDate, 'yyyy-MM-dd');

    const dateReturned = await datePicker
      .present({
        mode: 'date',
        locale: userLocale,
        format: 'yyyy-MM-dd',
        date: popupDate,
        theme: this.colorThemeService.getCurrentTheme(),
        doneText: this.translateService.instant('button.ok'),
        cancelText: this.translateService.instant('button.cancel')
      });

    if (dateReturned !== undefined) {
      return new Date(dateReturned.value);
    }

    return undefined;
  }
}
