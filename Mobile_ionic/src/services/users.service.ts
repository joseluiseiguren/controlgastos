/* eslint-disable @typescript-eslint/quotes */
/* eslint-disable no-throw-literal */
/* eslint-disable @typescript-eslint/member-ordering */
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { User } from 'src/models/user';
import { UrlService } from './url.service';
import { map } from 'rxjs/operators';
import { FormGroup } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  public userCurrency: string;
  public userName = new BehaviorSubject<string>('');
  private jwtHelper = new JwtHelperService();

  constructor(private http: HttpClient,
              private translate: TranslateService,
              private urlService: UrlService) {
    this.setUserName(this.getUserNameFromToken());
  }

  login(email: string, password: string, language: string ): Observable<boolean> {
      return this.http.post<any>(this.urlService.urlLogin(),
              {email, password, language})
              .pipe(
                map(user => {
                  // login successful if there's a jwt token in the response
                  if (user && user.token) {
                      // store user details and jwt token in local storage to keep user logged in between page refreshes
                      localStorage.setItem('alow', user.token);
                      this.userCurrency = this.getMoneda();
                      this.setUserName(this.getUserNameFromToken());
                      this.setLang(this.getUserLanguageFromToken());
                      return true;
                  }

                  return false;
                })
              );
  }

  register( usuario: User ): Observable<void> {
      const fechanacimiento = usuario.bornDate.getFullYear().toString() +
              (usuario.bornDate.getMonth() + 1).toString().padStart(2, '0') +
              usuario.bornDate.getDate().toString().padStart(2, '0');

      return this.http.post<any>(this.urlService.urlRegistracion(),
              {email: usuario.email,
               password: usuario.password,
               name: usuario.name,
               bornDate: fechanacimiento,
               currency: usuario.currency,
               language: usuario.language});
  }

  forgotPassword( email: string, lang: string): Observable<void> {

    return this.http.post<any>(this.urlService.urlForgotPassword(),
            {email, language: lang});
  }

  forgotPasswordApply( token: string, password: string ): Observable<void> {

    const headers = new HttpHeaders({authorization: 'Bearer ' + token });
    const data = { password };

    return this.http.post<any>(this.urlService.urlForgotPasswordApply(), data, { headers});

  }

  updateProfile(usuario: User): Observable<void> {
      const fechanacimiento = usuario.bornDate.getFullYear().toString() +
              (usuario.bornDate.getMonth() + 1).toString().padStart(2, '0') +
              usuario.bornDate.getDate().toString().padStart(2, '0');

      return this.http.put<any>(this.urlService.urlUserUpdateProfile(),
              {email: usuario.email,
               password: usuario.password,
               name: usuario.name,
               bornDate: fechanacimiento,
               currency: usuario.currency,
               language: usuario.language});
  }

  logout() {
      // remove user from local storage to log user out
      localStorage.removeItem('alow');
  }

  isSessionExpired(): boolean {
      const token = localStorage.getItem('alow');
      if (token === null) {
          return true;
      }

      if (this.jwtHelper.isTokenExpired(token) === true) {
          return true;
      }

      return false;
  }

  private getUserNameFromToken(): string {
      const token = localStorage.getItem('alow');
      let userName = '';

      if (token !== null) {
          userName = this.jwtHelper.decodeToken(token).user;
      }

      return userName;
  }

  private setLang(lang: string): void {
    this.translate.use(lang);
  }

  private getUserLanguageFromToken(): string {
    const token = localStorage.getItem('alow');
    let userLang = '';

    if (token !== null) {
        userLang = this.jwtHelper.decodeToken(token).lang;
    }

    return userLang;
}

  setUserName(userName: string): void {
    this.userName.next(userName);
  }

  getUserId(): string {
      const token = localStorage.getItem('alow');
      let userId = '';

      if (token !== null) {
          userId = this.jwtHelper.decodeToken(token).id;
      }

      return userId;
  }

  private getMoneda(): string {
      const token = localStorage.getItem('alow');
      let moneda = '';

      if (token !== null) {
          moneda = this.jwtHelper.decodeToken(token).moneda;
      }

      return moneda;
  }

  getProfile(): Observable<User> {
    return this.http.get<User>(this.urlService.urlGetUserProfile())
                      .pipe(
                        map(res => {
                          const user: User = {id: res.id,
                                              statusId: res.statusId,
                                              entryDate: res.entryDate === null ? new Date() : new Date(res.entryDate),
                                              name: res.name,
                                              language: res.language,
                                              currency: res.currency,
                                              bornDate: new Date(res.bornDate),
                                              email: res.email,
                                              password: ""};
                          return user;
                        })
                      );
  }

  getAvailablesCurrencies(): string[] {
      return ['$', 'U$D', '€'];
  }

  checkPasswords(group: FormGroup) {
    if (group === null) {
      throw 'group is NULL';
    }
    const pass = group.get('passwordFormControl')?.value;
    const confirmPass = group.get('passwordRepeatFormControl')?.value;

    return pass === confirmPass ? null : { notSame: true };
    }

}
