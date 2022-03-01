/* eslint-disable no-throw-literal */
import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root'
})
export class HelperService {

  constructor(private translate: TranslateService) { }

  getErrorMessage(error: any): string {
      let message = '';

      if (error === undefined) {
        return '[error] is undefined';
      }

      if (error.status === undefined) {
            return 'No status code in error: ' + JSON.stringify(error);
      }

      switch (error.status) {
          case 0:
            message = this.translate.instant('http.cantConnectWithServer');
            break;

          case 400: /* bad request */
            message = error.error.message;
            break;

          case 401: /* Unathorized */
            message = this.translate.instant('http.sessionExpired');
            break;

          case 500: /* internal server error */
            message = this.translate.instant('http.unexpectedError', {error: error.error.ErrorTraceId});
            break;

          default:
            message = 'Unknown status code: ' + error.status;
            break;

        }

        return message;
  }

  convertStringMMYYYYToDate(fecha: string /* MMYYYY */): Date {
      const mes = Number(fecha.substring(0, 2)) - 1;
      const anio = Number(fecha.substring(2, 6));

      const retFecha = new Date(anio, mes, 1);

      return retFecha;
  }

  /* La fecha de entrada es 1980-05-13T00:00:00.000Z y la de salida 13/05/1980*/
  convertStringYYYMMDDToStringDDMMYYYY(fecha: string): string {
      const dia = fecha.substring(8, 10);
      const mes = fecha.substring(5, 7);
      const anio = fecha.slice(0, 4);

      return dia + '/' + mes + '/' + anio;
  }

  toCamelCase(strInput: string | null): string {
    if (strInput === null){
      throw 'Invalid parameter NULL';
    }

    return strInput[0].toUpperCase() + strInput.slice(1);
  }
}
