import { NgModule } from '@angular/core';
import { LibJlePwdComponent } from './lib-jle-pwd.component';
import { MatIconModule  } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';

@NgModule({
  declarations: [
    LibJlePwdComponent
  ],
  imports: [
    MatIconModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule
  ],
  exports: [
    LibJlePwdComponent
  ]
})
export class LibJlePwdModule { }
