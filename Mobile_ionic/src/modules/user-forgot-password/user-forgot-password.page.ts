import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { UrlConstants } from 'src/constants/url.constants';
import { HelperService } from 'src/services/helper.service.service';
import { LangService } from 'src/services/lang.service.service';
import { SnackBarService } from 'src/services/snackBar.service';
import { UsersService } from 'src/services/users.service';

@Component({
  selector: 'app-user-forgot-password',
  templateUrl: './user-forgot-password.page.html',
  styleUrls: ['./user-forgot-password.page.scss'],
})
export class UserForgotPasswordPage implements OnInit {

  loading = false;
  fpForm: FormGroup;

  constructor(public formBuilder: FormBuilder,
              public langService: LangService,
              private snackBarService: SnackBarService,
              private helperService: HelperService,
              private router: Router,
              private datePipe: DatePipe,
              private usersService: UsersService,
              public translate: TranslateService) { }

  get userLoginLink(): string {
    return UrlConstants.logIn;
  }

  ngOnInit() {
    this.fpForm = this.formBuilder.group({
      emailFormControl: ['', [Validators.required, Validators.email]]
    });

    this.fpForm.valueChanges.subscribe(x => {
      if (x.emailFormControl.indexOf(' ') >= 0){
        const fixedValue = x.emailFormControl.replace(/\s/g, '');
        this.fpForm.get('emailFormControl')?.setValue(fixedValue, { emitEvent: false });
      }
    });
  }

  async forgotPassword(): Promise<void> {
    this.loading  = true;

    try {
      await this.usersService.forgotPassword(this.fpForm.value.emailFormControl, this.translate.currentLang).toPromise();

      this.loading  = false;

      this.snackBarService.showSnackBarSuccess(this.translate.instant('forgotPassword.checkInbox'));
      this.router.navigateByUrl(this.userLoginLink);

    } catch (error) {
      this.loading = false;
      this.snackBarService.showSnackBarError(this.helperService.getErrorMessage(error));
    }
  }

}
