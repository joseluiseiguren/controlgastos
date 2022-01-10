import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AnualRoutingModule } from './anual-routing.module';
import { AnualComponent } from './../../_components/anual/anual.component';
import { TranslateModule } from '@ngx-translate/core';


@NgModule({
  declarations: [AnualComponent],
  imports: [
    CommonModule,
    SharedModule,
    AnualRoutingModule,
    TranslateModule
  ]
})
export class AnualModule { }
