import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalSettingsComponent } from 'src/components/modal-settings/modal-settings.component';
import { SettingComponent } from 'src/components/setting/setting.component';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { httpTranslateLoader } from '../custom-translate-module/translate.loader';
import { HttpClient } from '@angular/common/http';
import { IonicModule } from '@ionic/angular';

@NgModule({
  declarations: [
    ModalSettingsComponent,
    SettingComponent
  ],
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
  ],
  exports: [
    SettingComponent
]
})
export class SettingModule { }
