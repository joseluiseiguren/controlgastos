import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UrlService {
  private host: string = environment.apiUrl;

  constructor() { }

  urlGetConceptos(): string {
      return this.host + 'concept';
  }

  urlInsertConcepto(): string {
      return this.host + 'concept';
  }

  urlUpdateConcepto(): string {
      return this.host + 'concept';
  }

  urlGetConceptosImportes(fecha: string | null): string {
      return this.host + 'transaction/' + fecha;
  }

  urlSetConceptoImporte(): string {
      return this.host + 'transaction';
  }

  urlRequestDownloadTransactions(): string {
    return this.host + 'transaction/download/request';
}

  urlGetPrimerConsumo(): string {
      return this.host + 'transaction/firstlast';
  }

  urlGetConceptosTotalMes(fecha: string): string {
      return this.host + 'concept/monthly/' + fecha + '/summary';
  }

  urlGetConceptosMovimMes(idConcepto: string, fecha: string): string {
      return this.host + 'concept/' + idConcepto + '/monthly/' + fecha + '/summary';
  }

  urlGetSumaryMensual(year: number, month: number): string {
      return this.host + 'period/totalinout/' + year + '/' + month ;
  }

  urlLogin(): string {
      return this.host + 'Account/login';
  }

  urlRegistracion(): string {
      return this.host + 'Account/signup';
  }

  urlForgotPassword(): string {
    return this.host + 'Account/forgotPassword/request';
  }

  urlForgotPasswordApply(): string {
    return this.host + 'Account/forgotPassword/apply';
  }

  urlUserUpdateProfile(): string {
      return this.host + 'account';
  }

  urlGetSumaryAnual(fecha: string): string {
      return this.host + 'period/totalinout/' + fecha.toString();
  }

  urlGetSumaryAnualSplittedByMonth(fecha: string): string {
    return this.host + 'period/totalinout/' + fecha.toString() + '/splittedByMonth';
}

  urlGetConceptosTotalAnio(anio: number): string {
      return this.host + 'concept/annual/' + anio.toString() + '/summary';
  }

  urlGetConceptosMovimAnio(idConcepto: string, anio: number): string {
      return this.host + 'concept/' + idConcepto + '/annual/' + anio.toString() + '/summary';
  }

  urlGetUserProfile(): string {
      return this.host + 'account/';
  }

  urlGetSumaryHistorico(): string {
      return this.host + 'api/historico/sumary';
  }

  urlGetConceptosTotalHistorico(): string {
      return this.host + 'concept/historic/summary';
  }

  urlGetConceptosMovimHistorico(idConcepto: string): string {
      return this.host + 'concept/' + idConcepto + '/historic/summary';
  }

  urlPostInternalLog(): string {
    return this.host + 'log/mobile/internal';
}
}
