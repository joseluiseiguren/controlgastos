import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IConceptoDiario } from '../models/concepto.diario';
import { UrlService } from './url.service';
import { tap } from 'rxjs/operators';
import { DatePipe } from '@angular/common'

@Injectable()
export class DiarioService {

  constructor(private http: HttpClient,
              private urlService: UrlService,
              public datepipe: DatePipe) { }

  getConceptosImportes(fecha: Date): Observable<IConceptoDiario[]> {
    const url = this.urlService.urlGetConceptosImportes(this.datepipe.transform(fecha, 'yyyy-MM-dd'));

    return this.http.get<IConceptoDiario[]>(url)
                    .pipe(tap(data => JSON.stringify(data)));
  }

  setConceptoImporte(fecha: Date, importe: number, idConcepto: number, tags: string[]): Observable<void> {
    return this.http.post<any>(this.urlService.urlSetConceptoImporte(),
            {transactionDate: fecha.getFullYear().toString() +
                    (fecha.getMonth() + 1).toString().padStart(2, '0') +
                    fecha.getDate().toString().padStart(2, '0'),
              ammount: importe,
              conceptId: idConcepto,
              movimientoTags: tags});
  }

  getPrimerConsumo(): Observable<any> {
    return this.http.get<Date>(this.urlService.urlGetPrimerConsumo());
  }

  getConceptosTotalMes(fecha: string /*YYYYMM*/): Observable<any[]> {
    return this.http.get<any[]>(this.urlService.urlGetConceptosTotalMes(fecha))
                  //.delay(3000)
                  .pipe(tap(data => JSON.stringify(data)));
  }

  getConceptosMovimMes(idConcepto: string, fecha: string /*YYYYMM*/): Observable<any[]> {
    return this.http.get<any[]>(this.urlService.urlGetConceptosMovimMes(idConcepto, fecha))
                    //.delay(3000)
                    .pipe(tap(data => JSON.stringify(data)));
  }

  getConceptosTotalAnio(anio: number /*YYYY*/): Observable<any[]> {
    return this.http.get<any[]>(this.urlService.urlGetConceptosTotalAnio(anio))
                  //.delay(3000)
                  .pipe(tap(data => JSON.stringify(data)));
  }

  getConceptosMovimAnio(idConcepto: string, anio: number /*YYYY*/): Observable<any[]> {
    return this.http.get<any[]>(this.urlService.urlGetConceptosMovimAnio(idConcepto, anio))
                    //.delay(3000)
                    .pipe(tap(data => JSON.stringify(data)));
  }

  getConceptosTotalHistorico(): Observable<any[]> {
    return this.http.get<any[]>(this.urlService.urlGetConceptosTotalHistorico())
                  //.delay(3000)
                  .pipe(tap(data => JSON.stringify(data)));
  }

  getConceptosMovimHistorico(idConcepto: string): Observable<any[]> {
    return this.http.get<any[]>(this.urlService.urlGetConceptosMovimHistorico(idConcepto))
                    //.delay(3000)
                    .pipe(tap(data => JSON.stringify(data)));
  }
}
