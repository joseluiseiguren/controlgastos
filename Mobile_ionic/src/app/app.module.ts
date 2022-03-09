import { CacheService } from 'src/services/cache-service.service';
/* eslint-disable eol-last */
/* eslint-disable prefer-arrow/prefer-arrow-functions */
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy, RouterModule } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { HttpClient, HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { DatePipe, registerLocaleData } from '@angular/common';
import localeFr from '@angular/common/locales/fr';
import localeEs from '@angular/common/locales/es';
import localeEn from '@angular/common/locales/en';
import { LangService } from 'src/services/lang.service.service';
import { DiarioService } from 'src/services/diario.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HelperService } from 'src/services/helper.service.service';
import { SnackBarService } from 'src/services/snackBar.service';
import { AuthGuard } from 'src/guards/auth.guard';
import { httpTranslateLoader } from 'src/modules/custom-translate-module/translate.loader';
import { UserLoginComponent } from 'src/components/login/user-login/user-login.component';
import { AuthInterceptor } from 'src/interceptors/AuthInterceptor';
import { ColorThemeService } from 'src/services/color-theme.service';
import { SettingModule  } from 'src/modules/setting-module/setting-module';
import { ModalAboutComponent } from 'src/components/modal-about/modal-about.component';
import { BackgroundService } from 'src/services/background-service.service';
registerLocaleData(localeFr);
registerLocaleData(localeEs);
registerLocaleData(localeEn);

@NgModule({
  declarations: [
    AppComponent,
    UserLoginComponent,
    ModalAboutComponent
  ],
  entryComponents: [],
  imports: [
    BrowserModule,
    //IonicModule.forRoot({navAnimation: customAnimation}),
    IonicModule.forRoot(),
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    SettingModule,
    TranslateModule.forRoot({
      loader: {
         provide: TranslateLoader,
         useFactory: httpTranslateLoader,
         deps: [HttpClient]
         },
         isolate : false
      }),
    ReactiveFormsModule
  ],
  providers: [
    DatePipe,
    AuthGuard,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true,
    },
    HelperService,
    ColorThemeService,
    SnackBarService,
    LangService,
    DiarioService,
    BackgroundService,
    CacheService,
    {
      provide: RouteReuseStrategy,
      useClass: IonicRouteStrategy
    }
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}


