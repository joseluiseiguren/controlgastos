import { UrlConstants } from './../constants/url.constants';
import {Injectable} from '@angular/core';
import {HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UsersService } from '../services/users.service';
import { Router } from '@angular/router';
import { tap } from 'rxjs/operators';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private userService: UsersService,
              private router: Router) {
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    /*
    if (localStorage.getItem('alow') !== null &&
        req.headers.get('Authorization') === null) {
      const changedReq = req.clone({ headers: req.headers.set('Authorization', 'Bearer ' + localStorage.getItem('alow')) });
      return next.handle(changedReq).pipe(tap((event: HttpEvent<any>) => {
        if (event instanceof HttpResponse) {
          // do stuff
          // console.log(event);
        }
      }, (err: any) => {
        if (err instanceof HttpErrorResponse) {
          if (err.status === 401) {
            // not logged in so redirect to login page
            this.userService.logout();
            this.router.navigate([UrlConstants.logIn]);
          }
          if (err.status === 400) {
            // business error
          }
        }
      }));
    }
    */

    return next.handle(req);
  }
}
