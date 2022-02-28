import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HistoricalPageRoutingModule } from './historical-routing.module';

import { HistoricalPage } from './historical.page';
import { BalanceModule } from '../balance/balance.module';
import { BalanceModalModule } from '../balance-modal/balance-modal.module';
import { SettingModule } from '../setting-module/setting-module';
import { FavoriteModule } from '../favorite/favorite.module';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { httpTranslateLoader } from '../custom-translate-module/translate.loader';
import { HttpClient } from '@angular/common/http';
import { CalculationService } from 'src/sharedServices/calculationService';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BalanceModule,
    BalanceModalModule,
    FavoriteModule,
    SettingModule,
    TranslateModule.forChild({
      loader: {
         provide: TranslateLoader,
         useFactory: httpTranslateLoader,
         deps: [HttpClient]
         },
         isolate : false
      }),
      HistoricalPageRoutingModule,
  ],
  providers:[
    CalculationService
  ],
  declarations: [HistoricalPage]
})
export class HistoricalPageModule {}
