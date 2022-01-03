import { DiarioComponent } from './../../_components/diario/diario.component';
import { TwoDigitDecimaNumberDirective } from './../../directives/TwoDigitDecimaNumberDirective';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DiarioEnterComponent } from '../../_components/diario-enter/diario-enter.component';

import { DiarioRoutingModule } from './diario-routing.module';
import { SharedModule } from './../shared/shared.module';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [ DiarioComponent, DiarioEnterComponent, TwoDigitDecimaNumberDirective ],
  imports: [
    CommonModule,
    DiarioRoutingModule,
    SharedModule,
    TranslateModule
  ],
  entryComponents: [ DiarioEnterComponent ],
})
export class DiarioModule { }
