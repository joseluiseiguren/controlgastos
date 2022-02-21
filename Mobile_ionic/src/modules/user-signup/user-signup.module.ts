import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UserSignupPageRoutingModule } from './user-signup-routing.module';

import { UserSignupPage } from './user-signup.page';
import { httpTranslateLoader } from 'src/modules/custom-translate-module/translate.loader';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { HttpClient } from '@angular/common/http';
import { ModalDateComponent } from 'src/components/modal-date/modal-date.component';
import { SettingModule  } from '../setting-module/setting-module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    UserSignupPageRoutingModule,
    SettingModule,
    TranslateModule.forChild({
      loader: {
         provide: TranslateLoader,
         useFactory: httpTranslateLoader,
         deps: [HttpClient]
         },
         isolate : false
      }),
  ],
  declarations: [UserSignupPage, ModalDateComponent]
})
export class UserSignupPageModule {}
