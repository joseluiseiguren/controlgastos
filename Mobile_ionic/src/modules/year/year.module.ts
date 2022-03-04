import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { YearPageRoutingModule } from './year-routing.module';

import { YearPage } from './year.page';
import { BalanceModule } from '../balance/balance.module';
import { BalanceModalModule } from '../balance-modal/balance-modal.module';
import { FavoriteModule } from '../favorite/favorite.module';
import { DateMonthModalModule } from '../date-month-modal/date.month.modal.module';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { SettingModule } from '../setting-module/setting-module';
import { httpTranslateLoader } from '../custom-translate-module/translate.loader';
import { HttpClient } from '@angular/common/http';
import { CalculationService } from 'src/sharedServices/calculationService';
import { HideCeroModule } from '../hideCero/hidecero.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BalanceModule,
    BalanceModalModule,
    FavoriteModule,
    HideCeroModule,
    SettingModule,
    DateMonthModalModule,
    TranslateModule.forChild({
      loader: {
         provide: TranslateLoader,
         useFactory: httpTranslateLoader,
         deps: [HttpClient]
         },
         isolate : false
      }),
    YearPageRoutingModule
  ],
  providers: [
    CalculationService
  ],
  declarations: [YearPage]
})
export class YearPageModule {}
