import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UrlService } from './url.service';
import { tap } from 'rxjs/operators';

@Injectable()
export class ConceptoService {

    constructor(
            private http: HttpClient,
            private urlService: UrlService) { }

    getConceptos(): Observable<any[]> {
        return this.http.get<any[]>(this.urlService.urlGetConceptos())
                        .pipe(tap(data => JSON.stringify(data)));
    }

    insertConcepto(descripcion: string, credito: boolean, favorite: boolean): Observable<string> {
        return this.http.post<string>(this.urlService.urlInsertConcepto(),
                {description: descripcion,
                 credit: credito,
                 favorite});
    }

    updateConcepto(idConcepto: string, descripcion: string, credito: boolean, favorite: boolean): Observable<void> {
        return this.http.put<any>(this.urlService.urlUpdateConcepto(),
                {description: descripcion,
                 credit: credito,
                 conceptId: idConcepto,
                 favorite});
    }
}
