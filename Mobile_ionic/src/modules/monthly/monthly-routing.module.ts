import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MonthlyPage } from './monthly.page';

const routes: Routes = [
  {
    path: ':month',
    component: MonthlyPage
  },
  {
    path: '**',
    component: MonthlyPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MonthlyPageRoutingModule {}
