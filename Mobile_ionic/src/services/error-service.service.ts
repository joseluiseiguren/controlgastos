/* eslint-disable object-shorthand */
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IDeviceInformation } from 'src/models/device.information';
import { UrlService } from './url.service';

@Injectable({
  providedIn: 'root'
})
export class ErrorService {

  constructor(private http: HttpClient,
              private urlService: UrlService) { }

  sendError(error: any, deviceInfo: IDeviceInformation, userId: string){
    const err = JSON.stringify(error, Object.getOwnPropertyNames(error));
    return this.http.post<any>(this.urlService.urlSendError(),
      {
        message: err,
        userId: userId,
        deviceInfo: deviceInfo
      });
  }
}
