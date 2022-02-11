import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable()
export class UrlService {
    private _host: string = environment.apiUrl;

    constructor() { }

    urlGetConceptos(): string {
        return this._host + 'concept';
    }

    urlInsertConcepto(): string {
        return this._host + 'concept';
    }

    urlUpdateConcepto(): string {
        return this._host + 'concept';
    }

    urlGetConceptosImportes(fecha: string | null): string {
        return this._host + 'transaction/' + fecha;
    }

    urlSetConceptoImporte(): string {
        return this._host + 'transaction';
    }

    urlGetPrimerConsumo(): string {
        return this._host + 'transaction/firstlast';
    }

    urlGetConceptosTotalMes(fecha: string): string {
        return this._host + 'concept/monthly/' + fecha + '/summary';
    }

    urlGetConceptosMovimMes(idConcepto: string, fecha: string): string {
        return this._host + 'concept/' + idConcepto + '/monthly/' + fecha + '/summary';
    }

    urlGetSumaryMensual(year: number, month: number): string {
        return this._host + 'period/totalinout/' + year + '/' + month ;
    }

    urlLogin(): string {
        return this._host + 'Account/login';
    }

    urlRegistracion(): string {
        return this._host + 'Account/signup';
    }

    urlForgotPassword(): string {
      return this._host + 'Account/forgotPassword/request';
    }

    urlForgotPasswordApply(): string {
      return this._host + 'Account/forgotPassword/apply';
    }

    urlUserUpdateProfile(): string {
        return this._host + 'account';
    }

    urlGetSumaryAnual(fecha: string): string {
        return this._host + 'period/totalinout/' + fecha.toString();
    }

    urlGetConceptosTotalAnio(anio: number): string {
        return this._host + 'concept/annual/' + anio.toString() + '/summary';
    }

    urlGetConceptosMovimAnio(idConcepto: string, anio: number): string {
        return this._host + 'concept/' + idConcepto + '/annual/' + anio.toString() + '/summary';
    }

    urlGetUserProfile(): string {
        return this._host + 'account/';
    }

    urlGetSumaryHistorico(): string {
        return this._host + 'api/historico/sumary';
    }

    urlGetConceptosTotalHistorico(): string {
        return this._host + 'concept/historic/summary';
    }

    urlGetConceptosMovimHistorico(idConcepto: string): string {
        return this._host + 'concept/' + idConcepto + '/historic/summary';
    }

    urlPostInternalLog(): string {
      return this._host + 'log/mobile/internal';
  }
}
