import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FavoriteComponent } from 'src/components/favorite/favorite.component';

@NgModule({
  imports: [
    CommonModule,
    IonicModule
  ],
  exports: [FavoriteComponent],
  declarations: [FavoriteComponent]
})
export class FavoriteModule {}
