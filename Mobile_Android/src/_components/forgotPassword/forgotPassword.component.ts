import { UrlConstants } from './../../constants/url.constants';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UsersService } from '../../services/users.service';
import { HelperService } from '../../services/helper.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialogRef } from '@angular/material/dialog';
import { WelcomeComponent } from '../welcome/welcome.component';
import { firstValueFrom } from 'rxjs';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-forgotPassword',
  templateUrl: './forgotPassword.component.html',
  styleUrls: ['./forgotPassword.component.css']
})
export class ForgotPasswordComponent implements OnInit {
  fpForm: FormGroup;
  loading = false;
  loginUrl = UrlConstants.LOGIN;
  dialogRef: MatDialogRef<WelcomeComponent>;

  constructor(private formBuilder: FormBuilder,
              private usersService: UsersService,
              private _helperService: HelperService,
              private router: Router,
              public translate: TranslateService,
              public snackBar: MatSnackBar) { }

    ngOnInit() {
      this.fpForm = this.formBuilder.group({
        emailFormControl: ['', [Validators.required, Validators.email]]
      }, {validator: this.usersService.checkPasswords });
    }

    async forgotPassword(): Promise<void> {
      this.loading  = true;

      const source$ = this.usersService.forgotPassword(this.fpForm.value.emailFormControl, this.translate.currentLang);

      try {
        await firstValueFrom(source$);

        this.loading  = false;

        this._helperService.showSnackBarSuccess(this.snackBar, this.translate.instant("forgotPassword.checkInbox"));
        this.router.navigateByUrl(this.loginUrl);

      } catch (error) {
        this.loading = false;
        this._helperService.showSnackBarError(this.snackBar, this._helperService.getErrorMessage(error));
      }

    }

  }