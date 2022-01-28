import { UrlConstants } from './../../constants/url.constants';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UsersService } from '../../services/users.service';
import { HelperService } from '../../services/helper.service';
import { ActivatedRoute, Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { firstValueFrom } from 'rxjs';
import { TranslateService } from '@ngx-translate/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-forgotPasswordApply',
  templateUrl: './forgotPasswordApply.component.html',
  styleUrls: ['./forgotPasswordApply.component.css']
})
export class ForgotPasswordApplyComponent implements OnInit {
  fpForm: FormGroup;
  loading = false;
  loginUrl = UrlConstants.LOGIN;
  token: string | null = '';
  userName = '';

  constructor(private formBuilder: FormBuilder,
              private usersService: UsersService,
              private _helperService: HelperService,
              private router: Router,
              private activeRoute: ActivatedRoute,
              public translate: TranslateService,
              public snackBar: MatSnackBar) { }

    ngOnInit() {
      this.fpForm = this.formBuilder.group({
        passwordFormControl: ['', [Validators.required]],
        passwordRepeatFormControl: ['']
      }, {validator: this.usersService.checkPasswords });

      this.token = this.activeRoute.snapshot.paramMap.get('token');

      const userLang = this.getUserLanguageFromToken(this.token ?? '');
      this.translate.use(userLang);

      this.userName = this.getUserNameFromToken(this.token ?? '');
    }

    async forgotPasswordApply(): Promise<void> {
      this.loading  = true;

      const source$ = this.usersService.forgotPasswordApply(this.token ?? '', this.fpForm.value.passwordFormControl);

      try {
        await firstValueFrom(source$);

        this.loading  = false;

        this._helperService.showSnackBarSuccess(this.snackBar, this.translate.instant("forgotPassword.updateOK"));
        this.router.navigateByUrl(this.loginUrl);

      } catch (error) {
        this.loading = false;
        this._helperService.showSnackBarError(this.snackBar, this._helperService.getErrorMessage(error));
      }

    }

    private getUserLanguageFromToken(token: string): string {
      const jwtHelper = new JwtHelperService();
      let userLang = '';

      if (token !== null) {
          userLang = jwtHelper.decodeToken(token).lang;
      }

      return userLang;
    }

    private getUserNameFromToken(token: string): string {
      const jwtHelper = new JwtHelperService();
      let userName = '';

      if (token !== null) {
        userName = jwtHelper.decodeToken(token).user;
      }

      return userName;
    }

  }
