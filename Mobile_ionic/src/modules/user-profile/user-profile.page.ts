/* eslint-disable max-len */
import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';
import { User } from 'src/models/user';
import { DateNativeModalService } from 'src/services/date-native-modal.service';
import { HelperService } from 'src/services/helper.service.service';
import { LangService } from 'src/services/lang.service.service';
import { SnackBarService } from 'src/services/snackBar.service';
import { UsersService } from 'src/services/users.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.page.html',
  styleUrls: ['./user-profile.page.scss'],
})
export class UserProfilePage implements OnInit {
  loadingButton = false;
  loadingBig = false;
  profileForm: FormGroup;
  currentLang = this.translate.currentLang;
  selectedLang = { 'padding-left': '1rem', 'background-repeat': 'no-repeat', 'background-image':`url(./../../../assets/icon/${this.translate.currentLang}Flag.png)`};
  currencies: string[];

  constructor(public formBuilder: FormBuilder,
              public langService: LangService,
              private snackBarService: SnackBarService,
              private helperService: HelperService,
              private datePipe: DatePipe,
              private dateNative: DateNativeModalService,
              private usersService: UsersService,
              public translate: TranslateService) { }

  ngOnInit() {
    this.profileForm = this.formBuilder.group({
      emailFormControl: ['', [Validators.required, Validators.email]],
      fechaNacimientoFormControl: ['', [Validators.required]],
      nameFormControl: ['', [Validators.required]],
      monedaFormControl: ['', [Validators.required]],
      languageFormControl: [this.translate.currentLang, [Validators.required]]
    }, {validator: this.usersService.checkPasswords });

    this.currencies = this.usersService.getAvailablesCurrencies();

    this.getData();
  }

  async onSubmit(){
    this.loadingButton  = true;

    const userProfile = this.createUser();

    try {
      const data = await this.usersService.updateProfile(userProfile).toPromise();

      this.usersService.setUserName(userProfile.name);
      this.snackBarService.showSnackBarSuccess(this.translate.instant('message.successfulOperation'));
      this.loadingButton  = false;
      this.profileForm.markAsPristine();

    } catch (error) {
      this.loadingButton = false;
      this.snackBarService.showSnackBarError(this.helperService.getErrorMessage(error));
    }
  }

  async openModalBornDate(){
    const currentDate = this.profileForm.controls.fechaNacimientoFormControl.value === '' ?
      new Date() :
      new Date(this.profileForm.controls.fechaNacimientoFormControl.value);

    const dateSelected = await this.dateNative.openDateModal(currentDate, this.currentLang);

    if (dateSelected !== undefined) {
      this.profileForm.controls.fechaNacimientoFormControl.setValue(this.datePipe.transform(dateSelected, 'mediumDate'));
      this.profileForm.markAsDirty();
    }
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

  async getData(): Promise<void> {
    this.loadingBig = true;

    try {
      const data = await this.usersService.getProfile().toPromise();

      this.profileForm.setValue({emailFormControl: data.email,
              nameFormControl: data.name,
              fechaNacimientoFormControl: this.datePipe.transform(data.bornDate, 'mediumDate'),
              monedaFormControl: data.currency,
              languageFormControl: data.language});

      this.loadingBig = false;
    } catch (error) {
      this.loadingBig = false;
      this.snackBarService.showSnackBarError(this.helperService.getErrorMessage(error));
    }
  }

  private createUser(): User {
    const user: User = {
      email: this.profileForm.value.emailFormControl,
      bornDate: new Date(this.profileForm.controls.fechaNacimientoFormControl.value.toString()),
      currency: this.profileForm.value.monedaFormControl,
      language: this.profileForm.value.languageFormControl,
      name: this.profileForm.value.nameFormControl,
      entryDate: null,
      id: null,
      statusId: null,
      password: this.profileForm.value.passwordFormControl
    };

    return user;
  }
}
