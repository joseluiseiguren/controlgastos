import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { HideCeroComponent } from 'src/components/hide-cero/hide-cero.component';

@NgModule({
  imports: [
    CommonModule,
    IonicModule
  ],
  exports: [HideCeroComponent],
  declarations: [HideCeroComponent]
})
export class HideCeroModule {}
