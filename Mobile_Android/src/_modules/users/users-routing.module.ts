import { ForgotPasswordComponent } from './../../_components/forgotPassword/forgotPassword.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UrlConstants } from 'src/constants/url.constants';
import { RegistracionComponent } from 'src/_components/registracion/registracion.component';
import { UserprofileComponent } from 'src/_components/userprofile/userprofile.component';
import { ForgotPasswordApplyComponent } from 'src/_components/forgotPasswordApply/forgotPasswordApply.component';

const routes: Routes = [
  {path: UrlConstants.USERPROFILE, component: UserprofileComponent},
  {path: UrlConstants.REGISTRACION, component: RegistracionComponent},
  {path: UrlConstants.FORGOT_PASSWORD, component: ForgotPasswordComponent},
  {path: UrlConstants.FORGOT_PASSWORD_APPLY, component: ForgotPasswordApplyComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
