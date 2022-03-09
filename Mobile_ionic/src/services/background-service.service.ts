import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UrlService } from './url.service';

@Injectable({
  providedIn: 'root'
})
export class BackgroundService {

  private dailyPostOperations: any[] = [];
  private processing = false;

  constructor(private http: HttpClient,
              private urlService: UrlService) {

    setInterval(async () => {
      if (this.processing === false){
        const data = this.dailyPostOperations.shift();
        if (data !== undefined) {
          this.processing = true;
          await this.postDaily(data).toPromise();
          this.processing = false;
        }
      }
    }, 2000);
  }

  public queuePostDaily(data: any){
    this.dailyPostOperations.push(data);
  }

  private postDaily(data: any): Observable<void>{
    return this.http.post<any>(this.urlService.urlSetConceptoImporte(), data);
  }
}
