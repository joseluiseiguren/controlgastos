import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ConceptsPageRoutingModule } from './concepts-routing.module';

import { ConceptsPage } from './concepts.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ConceptsPageRoutingModule
  ],
  declarations: [ConceptsPage]
})
export class ConceptsPageModule {}
