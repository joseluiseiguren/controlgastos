import { SumaryMonth } from './../models/sumaryMonth';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UrlService } from './url.service';
import { tap } from 'rxjs/operators';

@Injectable()
export class SumaryMonthService {

  constructor(private _http: HttpClient,
              private _urlService: UrlService) { }

  getSumary(fecha: Date): Observable<SumaryMonth> {
    const year = fecha.getFullYear();
    return this._http.get<SumaryMonth>(this._urlService.urlGetSumaryMensual(year, fecha.getMonth() + 1))
                    .pipe(tap(data => JSON.stringify(data)));
  }
}
