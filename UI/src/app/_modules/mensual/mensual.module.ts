import { FilterComponent } from './../../_components/filter/filter.component';
import { FilterPopupComponent } from './../../_components/filter-popup/filter-popup.component';
import { MensualComponent } from './../../_components/mensual/mensual.component';
import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MensualRoutingModule } from './mensual-routing.module';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [ MensualComponent, FilterPopupComponent, FilterComponent ],
  imports: [
    CommonModule,
    SharedModule,
    MensualRoutingModule,
    TranslateModule
  ],
  entryComponents: [ FilterPopupComponent ],
})
export class MensualModule { }
