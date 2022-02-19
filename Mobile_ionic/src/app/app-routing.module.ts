import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserLoginComponent } from 'src/components/login/user-login/user-login.component';
import { UrlConstants } from 'src/constants/url.constants';
import { AuthGuard } from 'src/guards/auth.guard';

const routes: Routes = [
  {
    path: UrlConstants.daily + '/:day',
    loadChildren: () => import('./../modules/daily/daily.module').then( m => m.DailyPageModule),
    canActivate: [AuthGuard]
  },
  {
    path: UrlConstants.monthly + '/:month/:open',
    loadChildren: () => import('./../modules/monthly/monthly.module').then( m => m.MonthlyPageModule),
    canActivate: [AuthGuard]
  },
  {
    path: UrlConstants.year + '/:anio/:open',
    loadChildren: () => import('./../modules/year/year.module').then( m => m.YearPageModule),
    canActivate: [AuthGuard]
  },
  {
    path: UrlConstants.historical,
    loadChildren: () => import('./../modules/historical/historical.module').then( m => m.HistoricalPageModule),
    canActivate: [AuthGuard]
  },
  {
    path: UrlConstants.concepts,
    loadChildren: () => import('./../modules/concepts/concepts.module').then( m => m.ConceptsPageModule),
    canActivate: [AuthGuard]
  },
  {
    path: UrlConstants.userProfile,
    loadChildren: () => import('./../modules/user-profile/user-profile.module').then( m => m.UserProfilePageModule),
    canActivate: [AuthGuard]
  },
  {
    path: UrlConstants.signUp,
    loadChildren: () => import('./../modules/user-signup/user-signup.module').then( m => m.UserSignupPageModule)
  },
  {
    path: UrlConstants.forgotPasswordRequest,
    loadChildren: () => import('./../modules/user-forgot-password/user-forgot-password.module').then( m => m.UserForgotPasswordPageModule)
  },
  {
    path: UrlConstants.logIn,
    component: UserLoginComponent,
  },
  {
    path: '**',
    redirectTo: UrlConstants.logIn
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { onSameUrlNavigation: 'reload' })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
