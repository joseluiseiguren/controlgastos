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
import { LangService } from 'src/sharedServices/langService';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
    loading = false;
    loginForm: FormGroup;
    currentLang = this.translate.currentLang;
    hidePassword = true;

    public registerUrl = '/' + UrlConstants.USERS + '/' + UrlConstants.REGISTRACION;
    public forgotPasswordUrl = '/' + UrlConstants.USERS + '/' + UrlConstants.FORGOT_PASSWORD;

    constructor(private router: Router,
                private formBuilder: FormBuilder,
                private usersService: UsersService,
                private _datePipe: DatePipe,
                private _helperService: HelperService,
                public snackBar: MatSnackBar,
                public langService: LangService,
                public translate: TranslateService) {

      if (this.usersService.isSessionExpired() === false) {
        this.ingresarApp();
      }
    }

    async ngOnInit(): Promise<void> {
      this.loginForm = this.formBuilder.group({
        emailFormControl: ['', [Validators.required, Validators.email]],
        pwdFormControl: ['', [Validators.required]]
      });

      this.loginForm.valueChanges.subscribe(x => {
        if (x.emailFormControl.indexOf(' ') >= 0){
          const fixedValue = x.emailFormControl.replace(/\s/g, "");
          this.loginForm.get("emailFormControl")?.setValue(fixedValue, { emitEvent: false });
        }
      })
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
