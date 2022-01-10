import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from './../shared/shared.module';

import { ConceptsRoutingModule } from './concepts-routing.module';
import { ConceptosComponent } from './../../_components/conceptos/conceptos.component';
import { ConceptoDialogComponent } from './../../_components/concepto-dialog/concepto-dialog.component';
import { TranslateModule } from '@ngx-translate/core';


@NgModule({
  declarations: [ConceptosComponent, ConceptoDialogComponent],
  imports: [
    CommonModule,
    SharedModule,
    ConceptsRoutingModule,
    TranslateModule
  ],
  entryComponents: [ ConceptoDialogComponent ],
})
export class ConceptsModule { }
