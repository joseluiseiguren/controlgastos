import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IConceptoDiario } from '../models/concepto.diario';
import { UrlService } from './url.service';
import { tap } from 'rxjs/operators';
import { DatePipe } from '@angular/common'

@Injectable()
export class DiarioService {

  constructor(private _http: HttpClient,
              private _urlService: UrlService,
              public datepipe: DatePipe) { }

  getConceptosImportes(fecha: Date): Observable<IConceptoDiario[]> {
    const url = this._urlService.urlGetConceptosImportes(this.datepipe.transform(fecha, 'yyyy-MM-dd'));

    return this._http.get<IConceptoDiario[]>(url)
                    .pipe(tap(data => JSON.stringify(data)));
  }

  setConceptoImporte(fecha: Date, importe: number, idConcepto: number, tags: string[]): Observable<void> {
    return this._http.post<any>(this._urlService.urlSetConceptoImporte(),
            {TransactionDate: fecha.getFullYear().toString() +
                    (fecha.getMonth() + 1).toString().padStart(2, '0') +
                    fecha.getDate().toString().padStart(2, '0'),
              Ammount: importe,
              ConceptId: idConcepto,
              movimientoTags: tags});
  }

  getPrimerConsumo(): Observable<any> {
    return this._http.get<Date>(this._urlService.urlGetPrimerConsumo());
  }

  getConceptosTotalMes(fecha: string /*YYYYMM*/): Observable<any[]> {
    return this._http.get<any[]>(this._urlService.urlGetConceptosTotalMes(fecha))
                  //.delay(3000)
                  .pipe(tap(data => JSON.stringify(data)));
  }

  getConceptosMovimMes(idConcepto: string, fecha: string /*YYYYMM*/): Observable<any[]> {
    return this._http.get<any[]>(this._urlService.urlGetConceptosMovimMes(idConcepto, fecha))
                    //.delay(3000)
                    .pipe(tap(data => JSON.stringify(data)));
  }

  getConceptosTotalAnio(anio: number /*YYYY*/): Observable<any[]> {
    return this._http.get<any[]>(this._urlService.urlGetConceptosTotalAnio(anio))
                  //.delay(3000)
                  .pipe(tap(data => JSON.stringify(data)));
  }

  getConceptosMovimAnio(idConcepto: string, anio: number /*YYYY*/): Observable<any[]> {
    return this._http.get<any[]>(this._urlService.urlGetConceptosMovimAnio(idConcepto, anio))
                    //.delay(3000)
                    .pipe(tap(data => JSON.stringify(data)));
  }

  getConceptosTotalHistorico(): Observable<any[]> {
    return this._http.get<any[]>(this._urlService.urlGetConceptosTotalHistorico())
                  //.delay(3000)
                  .pipe(tap(data => JSON.stringify(data)));
  }

  getConceptosMovimHistorico(idConcepto: string): Observable<any[]> {
    return this._http.get<any[]>(this._urlService.urlGetConceptosMovimHistorico(idConcepto))
                    //.delay(3000)
                    .pipe(tap(data => JSON.stringify(data)));
  }
}
