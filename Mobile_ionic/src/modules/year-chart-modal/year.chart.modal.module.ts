import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { httpTranslateLoader } from '../custom-translate-module/translate.loader';
import { HttpClient } from '@angular/common/http';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { ModalYearChartComponent } from 'src/components/modal-year-chart/modal-year-chart.component';
import { SumaryAnioService } from 'src/services/sumary-anio.service';

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    FormsModule,
    TranslateModule.forChild({
      loader: {
         provide: TranslateLoader,
         useFactory: httpTranslateLoader,
         deps: [HttpClient]
         },
         isolate : false
      }),
  ],
  providers: [
    SumaryAnioService
  ],
  declarations: [ModalYearChartComponent]
})
export class YearChartModalModule {}
