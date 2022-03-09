import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MonthlyPageRoutingModule } from './monthly-routing.module';

import { MonthlyPage } from './monthly.page';
import { BalanceModule } from '../balance/balance.module';
import { BalanceModalModule } from '../balance-modal/balance-modal.module';
import { FavoriteModule } from '../favorite/favorite.module';
import { SettingModule } from '../setting-module/setting-module';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { httpTranslateLoader } from '../custom-translate-module/translate.loader';
import { HttpClient } from '@angular/common/http';
import { DateMonthModalModule } from '../date-month-modal/date.month.modal.module';
import { CalculationService } from 'src/sharedServices/calculationService';
import { SumaryAnioService } from 'src/services/sumary-anio.service';
import { HideCeroModule } from '../hideCero/hidecero.module';
import { SumaryMonthService } from 'src/services/sumary-month.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MonthlyPageRoutingModule,
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
  ],
  providers: [
    CalculationService,
    SumaryAnioService,
    SumaryMonthService
  ],
  declarations: [MonthlyPage]
})
export class MonthlyPageModule {}
