import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { BalanceComponent } from 'src/components/balance/balance.component';

@NgModule({
  imports: [
    CommonModule,
    IonicModule
  ],
  exports: [BalanceComponent],
  declarations: [BalanceComponent]
})
export class BalanceModule {}
