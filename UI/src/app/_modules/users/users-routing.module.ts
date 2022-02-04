import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UrlConstants } from 'src/app/constants/url.constants';
import { UserprofileComponent } from 'src/app/_components/userprofile/userprofile.component';
import { RegistracionComponent } from 'src/app/_components/registracion/registracion.component';
import { ForgotPasswordComponent } from 'src/app/_components/forgotPassword/forgotPassword.component';
import { ForgotPasswordApplyComponent } from 'src/app/_components/forgotPasswordApply/forgotPasswordApply.component';

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
