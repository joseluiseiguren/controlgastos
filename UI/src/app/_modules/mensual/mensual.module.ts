import { FilterComponent } from './../../_components/filter/filter.component';
import { FilterPopupComponent } from './../../_components/filter-popup/filter-popup.component';
import { MensualComponent } from './../../_components/mensual/mensual.component';
import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MensualRoutingModule } from './mensual-routing.module';

@NgModule({
  declarations: [ MensualComponent, FilterPopupComponent, FilterComponent ],
  imports: [
    CommonModule,
    SharedModule,
    MensualRoutingModule
  ],
  entryComponents: [ FilterPopupComponent ],
})
export class MensualModule { }
