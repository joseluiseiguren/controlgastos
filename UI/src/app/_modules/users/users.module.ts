import { WelcomeComponent } from '../../_components/welcome/welcome.component';
import { RegistracionComponent } from '../../_components/registracion/registracion.component';
import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { UserprofileComponent } from 'src/app/_components/userprofile/userprofile.component';
import { ErrorMessageComponent } from 'src/app/_components/error-message/error-message.component';
import { TranslateModule } from '@ngx-translate/core';
import { LibJlePwdModule } from 'lib-jle-pwd';
import { ForgotPasswordComponent } from 'src/app/_components/forgotPassword/forgotPassword.component';
import { ForgotPasswordApplyComponent } from 'src/app/_components/forgotPasswordApply/forgotPasswordApply.component';

@NgModule({
  declarations: [ UserprofileComponent, RegistracionComponent, WelcomeComponent, ErrorMessageComponent, ForgotPasswordComponent, ForgotPasswordApplyComponent ],
  imports: [
    CommonModule,
    SharedModule,
    UsersRoutingModule,
    TranslateModule,
    LibJlePwdModule
  ],
  entryComponents: [ WelcomeComponent ],
})
export class UsersModule { }
