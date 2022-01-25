import { SharedModule } from './../_modules/shared/shared.module';
import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { LoginComponent } from './../_components/login/login.component';
import { RouterModule, Routes } from '@angular/router';
import { UrlConstants } from 'src/constants/url.constants';
import { AuthGuard } from 'src/guards/auth.guard';
import { DashboardComponent } from 'src/_components/dashboard/dashboard.component';
import { HttpClient, HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { UsersService } from 'src/services/users.service';
import { HelperService } from 'src/services/helper.service';
import { UrlService } from 'src/services/url.service';
import { CurrencyPipe, DatePipe, HashLocationStrategy, LocationStrategy } from '@angular/common';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { AuthInterceptor } from 'src/interceptors/AuthInterceptor';
import { AboutComponent } from 'src/_components/about/about.component';
import { SumaryMonthService } from 'src/services/sumary-month.service';
import { SumaryAnioService } from 'src/services/sumary-anio.service';
import { SumaryHistoricoService } from 'src/services/sumary-historico.service';
import { DiarioService } from 'src/services/diario.service';
import { ConceptoService } from 'src/services/concepto.service';
import { IpService } from 'src/services/ip.service';
import { FormatingService } from 'src/sharedServices/formatingService';
import { CalculationService } from 'src/sharedServices/calculationService';
import { LangService } from 'src/sharedServices/langService';
import { LibJlePwdModule } from 'lib-jle-pwd';

const routes: Routes = [

  { path: '', component: LoginComponent },
  { path: UrlConstants.LOGIN, component: LoginComponent },

  { path: UrlConstants.USERS,
    loadChildren: () => import('./../_modules/users/users.module').then(m => m.UsersModule) },

  { path: UrlConstants.DASHBOARD, component: DashboardComponent, canActivateChild: [AuthGuard],
                          children: [

                            { path: UrlConstants.DIARIO,
                              loadChildren: () => import('./../_modules/diario/diario.module').then(m => m.DiarioModule) },

                            { path: UrlConstants.MENSUAL,
                              loadChildren: () => import('./../_modules/mensual/mensual.module').then(m => m.MensualModule) },

                            { path: UrlConstants.ANUAL,
                              loadChildren: () => import('./../_modules/anual/anual.module').then(m => m.AnualModule) },

                            { path: UrlConstants.HISTORICO,
                              loadChildren: () => import('./../_modules/historico/historico.module').then(m => m.HistoricoModule) },

                            { path: UrlConstants.CONCEPTOS,
                              loadChildren: () => import('./../_modules/concepts/concepts.module').then(m => m.ConceptsModule) },

                            { path: UrlConstants.USERS,
                              loadChildren: () => import('./../_modules/users/users.module').then(m => m.UsersModule) },

                            { path: '',
                              loadChildren: () => import('./../_modules/diario/diario.module').then(m => m.DiarioModule) },
                          ]},
  { path: '**', redirectTo: UrlConstants.DASHBOARD}
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
         provide: TranslateLoader,
         useFactory: httpTranslateLoader,
         deps: [HttpClient]
         }
      }),
    MatToolbarModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LibJlePwdModule,
    SharedModule,
    RouterModule.forRoot(routes, { onSameUrlNavigation: 'reload' }),
  ],
  providers: [
    SumaryMonthService,
    SumaryAnioService,
    SumaryHistoricoService,
    DiarioService,
    UsersService,
    ConceptoService,
    IpService,
    HelperService,
    FormatingService,
    CalculationService,
    LangService,
    UrlService,
    CurrencyPipe,
    DatePipe,
    AuthGuard,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true,
    },
    {
      provide: LocationStrategy,
      useClass: HashLocationStrategy
    },
    {
      provide: LOCALE_ID,
      useValue: window.navigator.language.split('-')[0]
    }
  ],
  entryComponents: [ AboutComponent ],
  bootstrap: [AppComponent]
})
export class AppModule { }

// AOT compilation support
export function httpTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http);
}
