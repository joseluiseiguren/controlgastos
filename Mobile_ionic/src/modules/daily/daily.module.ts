import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

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
import { ModalDailyInputComponent } from 'src/components/modal-daily-input/modal-daily-input.component';
import { TwoDigitDecimaNumberDirective } from 'src/directives/TwoDigitDecimaNumberDirective';
import { FormatingService } from 'src/sharedServices/formatingService';
import { DiarioService } from 'src/services/diario.service';
import { BalanceModalModule } from '../balance-modal/balance-modal.module';
import { SumaryAnioService } from 'src/services/sumary-anio.service';
import { SumaryMonthService } from 'src/services/sumary-month.service';
import { HideCeroModule } from '../hideCero/hidecero.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    SettingModule,
    DateModalModule,
    BalanceModule,
    BalanceModalModule,
    FavoriteModule,
    HideCeroModule,
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
    CalculationService,
    FormatingService,
    DiarioService,
    SumaryMonthService,
    SumaryAnioService
  ],
  declarations: [DailyPage, ModalDailyInputComponent, TwoDigitDecimaNumberDirective]
})
export class DailyPageModule {}
