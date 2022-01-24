import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { LibJlePwdModule } from 'lib-jle-pwd';
//import { LibJlePwdModule } from 'lib-jle-pwd';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    LibJlePwdModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
