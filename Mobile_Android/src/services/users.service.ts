import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, BehaviorSubject, of } from 'rxjs';
import { User } from '../models/user';
import { UrlService } from './url.service';
import { catchError, map, tap } from 'rxjs/operators';
import { JwtHelperService } from '@auth0/angular-jwt';
import { FormGroup } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';

@Injectable()
export class UsersService {
    private jwtHelper = new JwtHelperService();
    public userCurrency: string;

    public userName = new BehaviorSubject<string>('');

    constructor(private _http: HttpClient,
                private translate: TranslateService,
                private _urlService: UrlService) {
      this.setUserName(this.getUserNameFromToken());
    }

    login(email: string, password: string, language: string ): Observable<boolean> {
        return this._http.post<any>(this._urlService.urlLogin(),
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

        return this._http.post<any>(this._urlService.urlRegistracion(),
                {email: usuario.email,
                 password: usuario.password,
                 name: usuario.name,
                 bornDate: fechanacimiento,
                 currency: usuario.currency,
                 language: usuario.language});
    }

    forgotPassword( email: string, lang: string): Observable<void> {

      return this._http.post<any>(this._urlService.urlForgotPassword(),
              {email: email, language: lang});
    }

    forgotPasswordApply( token: string, password: string ): Observable<void> {

      const headers = new HttpHeaders({'Authorization': 'Bearer ' + token });
      const data = { "password": password };

      return this._http.post<any>(this._urlService.urlForgotPasswordApply(), data, { headers: headers});

    }

    updateProfile(usuario: User): Observable<void> {
        const fechanacimiento = usuario.bornDate.getFullYear().toString() +
                (usuario.bornDate.getMonth() + 1).toString().padStart(2, '0') +
                usuario.bornDate.getDate().toString().padStart(2, '0');

        return this._http.put<any>(this._urlService.urlUserUpdateProfile(),
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

    private setLang(lang: string) : void {
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
      return this._http.get<User>(this._urlService.urlGetUserProfile())
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
