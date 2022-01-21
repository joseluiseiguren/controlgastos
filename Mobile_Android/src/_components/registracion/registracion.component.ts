import { UrlConstants } from './../../constants/url.constants';
import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UsersService } from '../../services/users.service';
import { HelperService } from '../../services/helper.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';
import { MatDialogRef } from '@angular/material/dialog';
import { WelcomeComponent } from '../welcome/welcome.component';
import { firstValueFrom } from 'rxjs';
import { TranslateService } from '@ngx-translate/core';
import { LangService } from 'src/sharedServices/langService';

@Component({
  selector: 'app-registracion',
  templateUrl: './registracion.component.html',
  styleUrls: ['./registracion.component.css']
})
export class RegistracionComponent implements OnInit {
  registerForm: FormGroup;
  startDate = new Date((new Date()).getFullYear() - 20, 0, 1);
  monedas: string[];
  loading = false;
  loginUrl = UrlConstants.LOGIN;
  dialogRef: MatDialogRef<WelcomeComponent>;

  constructor(private formBuilder: FormBuilder,
              private usersService: UsersService,
              private _helperService: HelperService,
              private helperService: HelperService,
              private router: Router,
              public welcomeDialog: MatDialog,
              public langService: LangService,
              public translate: TranslateService,
              public snackBar: MatSnackBar) { }

    ngOnInit() {
      this.registerForm = this.formBuilder.group({
        emailFormControl: ['', [Validators.required, Validators.email]],
        fechaNacimientoFormControl: ['', [Validators.required]],
        nameFormControl: ['', [Validators.required]],
        passwordFormControl: ['', [Validators.required]],
        passwordRepeatFormControl: [''],
        monedaFormControl: ['', [Validators.required]],
        languageFormControl: ['', [Validators.required]]
      }, {validator: this.usersService.checkPasswords });

      this.monedas = this.usersService.getAvailablesCurrencies();
    }

    async register(): Promise<void> {
      this.loading  = true;
      const user = this.createUser();

      const source$ = this.usersService.register(user);

      try {
        const data = await firstValueFrom(source$);

        this.loading  = false;
        this.dialogRef = this.welcomeDialog.open(WelcomeComponent, { data: {user} });

        this.dialogRef.afterClosed()
          .subscribe(() => {
            this.router.navigate([UrlConstants.LOGIN]);
          });

      } catch (error) {
        this.loading = false;
        this._helperService.showSnackBarError(this.snackBar, this._helperService.getErrorMessage(error));
      }

    }

    public selectLang(lang) : void {
      this.translate.use(lang.value);
    }

    private createUser(): User {
      const user: User = {
        email: this.registerForm.value.emailFormControl,
        bornDate: this.registerForm.value.fechaNacimientoFormControl,
        currency: this.registerForm.value.monedaFormControl,
        language: this.registerForm.value.languageFormControl,
        name: this.registerForm.value.nameFormControl,
        entryDate: null,
        id: null,
        statusId: null,
        password: this.registerForm.value.passwordFormControl
      };

      return user;
    }

  }
