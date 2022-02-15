import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { UrlConstants } from 'src/constants/url.constants';

const routes: Routes = [
  {
    path: UrlConstants.daily,
    loadChildren: () => import('./daily/daily.module').then( m => m.DailyPageModule)
  },
  {
    path: UrlConstants.monthly,
    loadChildren: () => import('./monthly/monthly.module').then( m => m.MonthlyPageModule)
  },
  {
    path: UrlConstants.year,
    loadChildren: () => import('./year/year.module').then( m => m.YearPageModule)
  },
  {
    path: UrlConstants.historical,
    loadChildren: () => import('./historical/historical.module').then( m => m.HistoricalPageModule)
  },
  {
    path: UrlConstants.concepts,
    loadChildren: () => import('./concepts/concepts.module').then( m => m.ConceptsPageModule)
  },
  {
    path: UrlConstants.userProfile,
    loadChildren: () => import('./user-profile/user-profile.module').then( m => m.UserProfilePageModule)
  },
  {
    path: '**',
    redirectTo: UrlConstants.daily
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { onSameUrlNavigation: 'reload' })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
