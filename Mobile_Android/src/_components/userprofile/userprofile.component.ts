import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../services/users.service';
import { HelperService } from '../../services/helper.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { User } from '../../models/user';
import { firstValueFrom } from 'rxjs';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-userprofile',
  templateUrl: './userprofile.component.html',
  styleUrls: ['./userprofile.component.css']
})
export class UserprofileComponent implements OnInit {
  loading = false;
  loadingAceptar = false;
  profileForm: FormGroup;
  monedas: string[];

  constructor(private _userService: UsersService,
              private formBuilder: FormBuilder,
              private _helperService: HelperService,
              public translate: TranslateService,
              public snackBar: MatSnackBar) {  }

  ngOnInit() {
    this.monedas = this._userService.getAvailablesCurrencies();

    this.profileForm = this.formBuilder.group({
      emailFormControl: ['', [Validators.required, Validators.email]],
      fechaNacimientoFormControl: ['', [Validators.required]],
      nameFormControl: ['', [Validators.required]],
      monedaFormControl: ['', [Validators.required]],
      languageFormControl: ['', [Validators.required]]
    });
    this.getData();
  }

  async getData(): Promise<void> {
    this.loading = true;

    const source$ = this._userService.getProfile();

    try {
      const data = await firstValueFrom(source$);

      this.profileForm.setValue({emailFormControl: data.email,
              nameFormControl: data.name,
              fechaNacimientoFormControl: data.bornDate,
              monedaFormControl: data.currency,
              languageFormControl: data.language});
      this.loading = false;

    } catch (error) {
      this.loading = false;
      this._helperService.showSnackBarError(this.snackBar, this._helperService.getErrorMessage(error));
    }
  }

  async changeProfile(): Promise<void> {
    this.loadingAceptar  = true;

    const userProfile = this.createUser();

    const source$ = this._userService.updateProfile(userProfile);

    try {
      const data = await firstValueFrom(source$);

      this._userService.setUserName(userProfile.name);
      this._helperService.showSnackBarSuccess(this.snackBar, this.translate.instant('message.successfulOperation'));
      this.loadingAceptar  = false;
      this.profileForm.markAsPristine();

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
      email: this.profileForm.value.emailFormControl,
      bornDate: new Date(this.profileForm.value.fechaNacimientoFormControl),
      currency: this.profileForm.value.monedaFormControl,
      language: this.profileForm.value.languageFormControl,
      name: this.profileForm.value.nameFormControl,
      entryDate: null,
      id: null,
      statusId: null,
      password: null
    };

    return user;
  }
}
