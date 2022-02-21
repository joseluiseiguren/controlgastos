import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UserForgotPasswordPageRoutingModule } from './user-forgot-password-routing.module';

import { UserForgotPasswordPage } from './user-forgot-password.page';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { httpTranslateLoader } from '../custom-translate-module/translate.loader';
import { HttpClient } from '@angular/common/http';
import { SettingModule } from '../setting-module/setting-module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    UserForgotPasswordPageRoutingModule,
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
  declarations: [UserForgotPasswordPage]
})
export class UserForgotPasswordPageModule {}
