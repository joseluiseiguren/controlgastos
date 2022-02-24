import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalBalanceComponent } from 'src/components/modal-balance/modal-balance.component';
import { IonicModule } from '@ionic/angular';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { httpTranslateLoader } from '../custom-translate-module/translate.loader';
import { HttpClient } from '@angular/common/http';



@NgModule({
  declarations: [ModalBalanceComponent],
  imports: [
    CommonModule,
    IonicModule,
    TranslateModule.forChild({
      loader: {
         provide: TranslateLoader,
         useFactory: httpTranslateLoader,
         deps: [HttpClient]
         },
         isolate : false
      }),
  ]
})
export class BalanceModalModule { }
