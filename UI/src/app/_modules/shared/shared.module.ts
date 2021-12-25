//import { MatTooltipModule } from '@angular/material//tooltip';
import { SaldoComponent } from './../../_components/saldo/saldo.component';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatChipsModule } from '@angular/material/chips';
import { MatIconModule  } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { SaldoAbiertoComponent } from '../../_components/saldo-abierto/saldo-abierto.component';
import { SaldoItemComponent } from '../../_components/saldo-item/saldo-item.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatTableModule } from '@angular/material/table';
import { MatCardModule } from '@angular/material/card';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatRadioModule } from '@angular/material/radio';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatBadgeModule } from '@angular/material/badge';
import { MatNativeDateModule } from '@angular/material/core';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatTabsModule } from '@angular/material/tabs';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatDatepickerModule } from '@angular/material/datepicker';

@NgModule({
  declarations: [SaldoComponent, SaldoAbiertoComponent, SaldoItemComponent],
  imports: [
    CommonModule,
    MatChipsModule,
    MatDialogModule,
    MatCardModule,
    MatAutocompleteModule,
    MatListModule,
    MatIconModule,
    MatTableModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatRadioModule,
    MatButtonModule,
    MatProgressSpinnerModule
  ],
  exports: [
    SaldoComponent,
    SaldoAbiertoComponent,
    SaldoItemComponent,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatProgressSpinnerModule,
    MatTableModule,
    MatFormFieldModule,
    MatButtonModule,
    MatCardModule,
    MatButtonToggleModule,
    MatBadgeModule,
    MatNativeDateModule,
    MatInputModule,
    MatSelectModule,
    MatSlideToggleModule,
    MatSidenavModule,
    MatExpansionModule,
    MatGridListModule,
    MatTabsModule,
    MatDialogModule,
    MatSnackBarModule,
    MatDatepickerModule,
    //MatTooltipModule,
    MatRadioModule,
    MatIconModule,
    MatListModule,
    MatChipsModule,
    MatAutocompleteModule
  ],
  entryComponents: [ SaldoAbiertoComponent ],
})
export class SharedModule { }
