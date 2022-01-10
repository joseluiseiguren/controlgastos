import { HelperService } from './../../services/helper.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from '../../services/users.service';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { firstValueFrom } from 'rxjs';
import { UrlConstants } from '../../constants/url.constants';
import { DatePipe } from '@angular/common';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
    loading = false;
    location: any = {};
    loginForm: FormGroup;
    currentLang = this.translate.currentLang;
    public registerUrl = '/' + UrlConstants.USERS + '/' + UrlConstants.REGISTRACION;

    constructor(private router: Router,
                private formBuilder: FormBuilder,
                private usersService: UsersService,
                private _datePipe: DatePipe,
                private _helperService: HelperService,
                public snackBar: MatSnackBar,
                public translate: TranslateService) {

      if (this.usersService.isSessionExpired() === false) {
        this.ingresarApp();
      }

      this.location.height = window.screen.height;
      this.location.width = window.screen.width;
      this.location.appCodeName = window.navigator.appCodeName;
      this.location.appVersion = window.navigator.appVersion;
      this.location.language = window.navigator.language;
      this.location.platform = window.navigator.platform;
      this.location.userAgent = window.navigator.userAgent;
    }

    async ngOnInit(): Promise<void> {
      this.loginForm = this.formBuilder.group({
        emailFormControl: ['', [Validators.required, Validators.email]],
        pwdFormControl: ['', [Validators.required]]
      });

      /*
      //To get IP information
      const source$ = this._ipService.getClientIp();

      try {
        const data = await firstValueFrom(source$);

        this.location.ip = data.ip;
        this.location.city = data.city;
        this.location.region = data.region;
        this.location.region_code = data.region_code;
        this.location.country = data.country;
        this.location.country_name = data.country_name;
        this.location.continent_code = data.continent_code;
        this.location.postal = data.postal;
        this.location.latitude = data.latitude;
        this.location.longitude = data.longitude;
        this.location.timezone = data.timezone;
        this.location.utc_offset = data.utc_offset;
        this.location.country_calling_code = data.country_calling_code;
        this.location.currency = data.currency;
        this.location.languages = data.languages;
        this.location.asn = data.asn;
        this.location.org = data.org;

      } catch (error) {
        this.loading = false;
        this._helperService.showSnackBarError(this.snackBar, this._helperService.getErrorMessage(error));
      }
      */

    }

    async login() {
      this.loading = true;

      const source$ = this.usersService.login(this.loginForm.value.emailFormControl, this.loginForm.value.pwdFormControl, this.translate.currentLang);

      try {
        const data = await firstValueFrom(source$);
        if (data === true) {
          this.loading = false;
          this.ingresarApp();
        } else {
          this._helperService.showSnackBarError(this.snackBar, this.translate.instant('login.accessDenied'));
          this.loading = false;
        }

      } catch (error) {
        this.loading = false;
        this._helperService.showSnackBarError(this.snackBar, this._helperService.getErrorMessage(error));
      }
    }

    public selectLang(lang) : void {
      this.currentLang = lang.value;
      this.translate.use(lang.value);
    }

    private ingresarApp () {
      const today = this._datePipe.transform(new Date(), 'yyyy-MM-dd');
      this.router.navigate([UrlConstants.DASHBOARD, UrlConstants.DIARIO, today]);
    }
}
