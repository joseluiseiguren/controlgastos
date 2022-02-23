import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DailyPageRoutingModule } from './daily-routing.module';

import { DailyPage } from './daily.page';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { httpTranslateLoader } from '../custom-translate-module/translate.loader';
import { HttpClient } from '@angular/common/http';
import { SettingModule } from '../setting-module/setting-module';
import { DateModalModule } from '../date-modal/date.modal.module';
import { BalanceModule } from '../balance/balance.module';
import { CalculationService } from 'src/sharedServices/calculationService';
import { FavoriteModule } from '../favorite/favorite.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SettingModule,
    DateModalModule,
    BalanceModule,
    FavoriteModule,
    DailyPageRoutingModule,
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
    CalculationService
  ],
  declarations: [DailyPage]
})
export class DailyPageModule {}
