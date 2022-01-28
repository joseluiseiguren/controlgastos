import { WelcomeComponent } from '../../_components/welcome/welcome.component';
import { RegistracionComponent } from '../../_components/registracion/registracion.component';
import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { TranslateModule } from '@ngx-translate/core';
import { UserprofileComponent } from 'src/_components/userprofile/userprofile.component';
import { ErrorMessageComponent } from 'src/_components/error-message/error-message.component';
import { LibJlePwdModule } from 'lib-jle-pwd';
import { ForgotPasswordComponent } from 'src/_components/forgotPassword/forgotPassword.component';
import { ForgotPasswordApplyComponent } from 'src/_components/forgotPasswordApply/forgotPasswordApply.component';

@NgModule({
  declarations: [ UserprofileComponent, RegistracionComponent, WelcomeComponent, ErrorMessageComponent, ForgotPasswordComponent, ForgotPasswordApplyComponent ],
  imports: [
    CommonModule,
    SharedModule,
    UsersRoutingModule,
    LibJlePwdModule,
    TranslateModule
  ],
  entryComponents: [ WelcomeComponent ],
})
export class UsersModule { }
