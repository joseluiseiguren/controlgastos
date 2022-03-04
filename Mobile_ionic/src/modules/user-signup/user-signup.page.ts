/* eslint-disable max-len */
import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { TranslateService } from '@ngx-translate/core';
import { UrlConstants } from 'src/constants/url.constants';
import { User } from 'src/models/user';
import { DateNativeModalService } from 'src/services/date-native-modal.service';
import { HelperService } from 'src/services/helper.service.service';
import { LangService } from 'src/services/lang.service.service';
import { SnackBarService } from 'src/services/snackBar.service';
import { UsersService } from 'src/services/users.service';

@Component({
  selector: 'app-user-signup',
  templateUrl: './user-signup.page.html',
  styleUrls: ['./user-signup.page.scss'],
})
export class UserSignupPage implements OnInit {
  loading = false;
  hidePassword = true;
  signupForm: FormGroup;
  currentLang = this.translate.currentLang;
  selectedLang = { 'padding-left': '1rem', 'background-repeat': 'no-repeat', 'background-image':`url(./../../../assets/icon/${this.translate.currentLang}Flag.png)`};

  passwordType = 'password';
  passwordIcon = 'eye-off';

  passwordRepeatType = 'password';
  passwordRepeatIcon = 'eye-off';

  currencies: string[];

  constructor(public formBuilder: FormBuilder,
              public langService: LangService,
              private snackBarService: SnackBarService,
              private helperService: HelperService,
              private datePipe: DatePipe,
              private router: Router,
              private dateNative: DateNativeModalService,
              private modalCtrl: ModalController,
              private usersService: UsersService,
              public translate: TranslateService) { }

  get userLoginLink(): string {
    return UrlConstants.logIn;
  }

  ngOnInit() {
    this.signupForm = this.formBuilder.group({
      emailFormControl: ['', [Validators.required, Validators.email]],
      fechaNacimientoFormControl: ['', [Validators.required]],
      nameFormControl: ['', [Validators.required]],
      passwordFormControl: ['', [Validators.required]],
      passwordRepeatFormControl: [''],
      monedaFormControl: ['', [Validators.required]],
      languageFormControl: [this.translate.currentLang, [Validators.required]]
    }, {validator: this.usersService.checkPasswords });

    this.currencies = this.usersService.getAvailablesCurrencies();
  }

  async openDateModal(){
    const currentDate = this.signupForm.controls.fechaNacimientoFormControl.value === '' ?
      new Date() :
      new Date(this.signupForm.controls.fechaNacimientoFormControl.value);

    const dateSelected = await this.dateNative.openDateModal(currentDate, this.currentLang);

    if (dateSelected !== undefined) {
      this.signupForm.controls.fechaNacimientoFormControl.setValue(this.datePipe.transform(dateSelected, 'mediumDate'));
    }
  }

  async onSignup(): Promise<void>{

    this.loading  = true;
    const user = this.createUser();

    try {
      await this.usersService.register(user).toPromise();

      this.loading  = false;

      this.snackBarService.showSnackBarSuccess(this.translate.instant('signup.success'));
      this.router.navigate([UrlConstants.logIn]);

    } catch (error) {
      this.loading = false;
      this.snackBarService.showSnackBarError(this.helperService.getErrorMessage(error));
    }
  }

  hideShowPassword() {
    this.passwordType = this.passwordType === 'text' ? 'password' : 'text';
    this.passwordIcon = this.passwordIcon === 'eye-off' ? 'eye' : 'eye-off';
  }

  hideShowRepeatPassword() {
    this.passwordRepeatType = this.passwordRepeatType === 'text' ? 'password' : 'text';
    this.passwordRepeatIcon = this.passwordRepeatIcon === 'eye-off' ? 'eye' : 'eye-off';
  }

  public selectLang(lang): void {
    this.translate.use(lang.detail.value);
  }

  loadFlags() {
    setTimeout(() => {
     const radios=document.getElementsByClassName('alert-radio-label');
     for (let index = 0; index < radios.length; index++) {
        const element = radios[index];
        element.innerHTML = element.innerHTML.concat(`<img src="./../../../assets/icon/${this.langService.langsLocal[index].value}Flag.png" />`);
      }
     }, 200);
  }

  onChangeLang($event) {
    this.currentLang = $event.target.value;
    this.translate.use(this.currentLang);
    this.selectedLang = { 'padding-left': '1rem', 'background-repeat': 'no-repeat', 'background-image':`url(./../../../assets/icon/${this.currentLang}Flag.png)`};
    localStorage.setItem('lastLangUsed', this.currentLang);
  }

  private createUser(): User {
    const user: User = {
      email: this.signupForm.value.emailFormControl,
      bornDate: new Date(this.signupForm.controls.fechaNacimientoFormControl.value.toString()),
      currency: this.signupForm.value.monedaFormControl,
      language: this.signupForm.value.languageFormControl,
      name: this.signupForm.value.nameFormControl,
      entryDate: null,
      id: null,
      statusId: null,
      password: this.signupForm.value.passwordFormControl
    };

    return user;
  }



}
