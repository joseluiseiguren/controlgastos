import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SumaryAnio } from './../models/sumaryAnio';
import { UrlService } from './url.service';
import { tap } from 'rxjs/operators';
import { SumaryAnioMonth } from 'src/models/sumaryAnioMonth';

@Injectable()
export class SumaryAnioService {

  constructor(private http: HttpClient,
              private urlService: UrlService) { }

  getSumary(fecha: Date): Observable<SumaryAnio> {
    return this.http.get<SumaryAnio>(this.urlService.urlGetSumaryAnual(fecha.getFullYear().toString()))
                    .pipe(tap(data => JSON.stringify(data)));
  }

  getSumarySplittedByMonth(fecha: Date): Observable<SumaryAnioMonth[]> {
    return this.http.get<SumaryAnioMonth[]>(this.urlService.urlGetSumaryAnualSplittedByMonth(fecha.getFullYear().toString()))
                    .pipe(tap(data => JSON.stringify(data)));
  }
}
