import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ConceptsPageRoutingModule } from './concepts-routing.module';

import { ConceptsPage } from './concepts.page';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { httpTranslateLoader } from '../custom-translate-module/translate.loader';
import { HttpClient } from '@angular/common/http';
import { SettingModule } from '../setting-module/setting-module';
import { ConceptoService } from 'src/services/concepto.service';
import { ModalConceptComponent } from 'src/components/modal-concept/modal-concept.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    ConceptsPageRoutingModule,
    SettingModule,
    TranslateModule.forChild({
      loader: {
         provide: TranslateLoader,
         useFactory: httpTranslateLoader,
         deps: [HttpClient]
         },
         isolate : false
      }),
  ],
  providers:[
    ConceptoService,
  ],
  declarations: [ConceptsPage, ModalConceptComponent]
})
export class ConceptsPageModule {}
