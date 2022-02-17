import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { UrlConstants } from 'src/constants/url.constants';
import { AuthGuard } from 'src/guards/auth.guard';
import { UserLoginComponent } from './login/user-login/user-login.component';

const routes: Routes = [
  {
    path: UrlConstants.daily + '/:day',
    loadChildren: () => import('./daily/daily.module').then( m => m.DailyPageModule),
    canActivate: [AuthGuard]
  },
  {
    path: UrlConstants.monthly + '/:month/:open',
    loadChildren: () => import('./monthly/monthly.module').then( m => m.MonthlyPageModule),
    canActivate: [AuthGuard]
  },
  {
    path: UrlConstants.year + '/:anio/:open',
    loadChildren: () => import('./year/year.module').then( m => m.YearPageModule),
    canActivate: [AuthGuard]
  },
  {
    path: UrlConstants.historical,
    loadChildren: () => import('./historical/historical.module').then( m => m.HistoricalPageModule),
    canActivate: [AuthGuard]
  },
  {
    path: UrlConstants.concepts,
    loadChildren: () => import('./concepts/concepts.module').then( m => m.ConceptsPageModule),
    canActivate: [AuthGuard]
  },
  {
    path: UrlConstants.userProfile,
    loadChildren: () => import('./user-profile/user-profile.module').then( m => m.UserProfilePageModule),
    canActivate: [AuthGuard]
  },
  {
    path: UrlConstants.signUp,
    loadChildren: () => import('./user-signup/user-signup.module').then( m => m.UserSignupPageModule)
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
