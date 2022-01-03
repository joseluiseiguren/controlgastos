import { HistoricoComponent } from '../../_components/historico/historico.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HistoricoRoutingModule } from './historico-routing.module';
import { SharedModule } from '../shared/shared.module';
import { TranslateModule } from '@ngx-translate/core';


@NgModule({
  declarations: [HistoricoComponent],
  imports: [
    CommonModule,
    HistoricoRoutingModule,
    SharedModule,
    TranslateModule
  ]
})
export class HistoricoModule { }
