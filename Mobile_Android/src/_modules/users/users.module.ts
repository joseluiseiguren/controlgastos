import { WelcomeComponent } from '../../_components/welcome/welcome.component';
import { RegistracionComponent } from '../../_components/registracion/registracion.component';
import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { TranslateModule } from '@ngx-translate/core';
import { UserprofileComponent } from 'src/_components/userprofile/userprofile.component';
import { ErrorMessageComponent } from 'src/_components/error-message/error-message.component';

@NgModule({
  declarations: [ UserprofileComponent, RegistracionComponent, WelcomeComponent, ErrorMessageComponent ],
  imports: [
    CommonModule,
    SharedModule,
    UsersRoutingModule,
    TranslateModule
  ],
  entryComponents: [ WelcomeComponent ],
})
export class UsersModule { }
