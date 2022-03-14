/* eslint-disable no-throw-literal */
/* eslint-disable @typescript-eslint/member-ordering */
/* eslint-disable @typescript-eslint/prefer-for-of */
/* eslint-disable max-len */
/* eslint-disable prefer-arrow/prefer-arrow-functions */
import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { UrlConstants } from 'src/constants/url.constants';
import { UsersService } from 'src/services/users.service';
import { SnackBarService } from 'src/services/snackBar.service';
import { HelperService } from './../../../services/helper.service.service';
import { DeviceInfoService } from 'src/services/device-info.service';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.scss'],
})
export class UserLoginComponent implements OnInit {
  loading = false;
  hidePassword = true;
  loginForm: FormGroup;

  passwordType = 'password';
  passwordIcon = 'eye-off';

  constructor(public formBuilder: FormBuilder,
              private snackBarService: SnackBarService,
              private helperService: HelperService,
              private deviceInfoService: DeviceInfoService,
              private router: Router,
              private datePipe: DatePipe,
              private usersService: UsersService,
              public translate: TranslateService) {
    if (this.usersService.isSessionExpired() === false) {
      this.ingresarApp();
    }
  }

  get userSignupLink(): string {
    return UrlConstants.signUp;
  }

  get userForgotPasswordLink(): string {
    return UrlConstants.forgotPasswordRequest;
  }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      emailFormControl: ['', [Validators.required, Validators.email]],
      pwdFormControl: ['', [Validators.required]]
    });

    this.loginForm.valueChanges.subscribe(x => {
      if (x.emailFormControl?.indexOf(' ') >= 0){
        const fixedValue = x.emailFormControl.replace(/\s/g, '');
        this.loginForm.get('emailFormControl')?.setValue(fixedValue, { emitEvent: false });
      }
    });
  }

 async onLogin() {
  this.loading = true;

  try {
    const data = await this.usersService.login(this.loginForm.value.emailFormControl,
                                               this.loginForm.value.pwdFormControl,
                                               this.translate.currentLang,
                                               this.deviceInfoService.deviceInfo).toPromise();
    if (data === true) {
      this.loading = false;
      this.loginForm.reset();
      this.ingresarApp();
    } else {
      this.snackBarService.showSnackBarError(this.translate.instant('login.accessDenied'));
      this.loading = false;
    }

  } catch (error) {
    this.loading = false;
    this.snackBarService.showSnackBarError(this.helperService.getErrorMessage(error));
  }
 }

  private ingresarApp() {
    try{
      this.router.navigate([UrlConstants.daily]);
    }
    catch(error){
      throw('Error parsing date');
    }
  }

  hideShowPassword() {
    this.passwordType = this.passwordType === 'text' ? 'password' : 'text';
    this.passwordIcon = this.passwordIcon === 'eye-off' ? 'eye' : 'eye-off';
  }

}
