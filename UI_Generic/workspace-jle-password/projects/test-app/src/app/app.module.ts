import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { LibJlePwdModule } from 'lib-jle-pwd';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule,
    MatFormFieldModule,
    LibJlePwdModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
