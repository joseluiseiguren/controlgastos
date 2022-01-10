import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UrlConstants } from 'src/constants/url.constants';
import { RegistracionComponent } from 'src/_components/registracion/registracion.component';
import { UserprofileComponent } from 'src/_components/userprofile/userprofile.component';

const routes: Routes = [
  {path: UrlConstants.USERPROFILE, component: UserprofileComponent},
  {path: UrlConstants.REGISTRACION, component: RegistracionComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
