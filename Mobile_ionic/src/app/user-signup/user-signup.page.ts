/* eslint-disable max-len */
import { DatePipe } from '@angular/common';
import { Component, Inject, LOCALE_ID, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ModalController } from '@ionic/angular';
import { TranslateService } from '@ngx-translate/core';
import { UrlConstants } from 'src/constants/url.constants';
import { LangService } from 'src/services/lang.service.service';
import { SnackBarService } from 'src/services/snackBar.service';
import { UsersService } from 'src/services/users.service';
import { ModalDateComponent } from '../components/modal-date/modal-date.component';

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
  selectedLang = {'background-image':`url(./../../../../assets/icon/${this.translate.currentLang}Flag.png)`};

  passwordType = 'password';
  passwordIcon = 'eye-off';

  passwordRepeatType = 'password';
  passwordRepeatIcon = 'eye-off';

  constructor(public formBuilder: FormBuilder,
              public langService: LangService,
              private snackBarService: SnackBarService,
              private datePipe: DatePipe,
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
  }

  async closeModal(){
    const modal = await this.modalCtrl.getTop();
    if (modal) {
      console.log(modal);
      modal.dismiss();
    }
  }

  async openModal(){
    const currentDate = this.signupForm.controls.fechaNacimientoFormControl.value === '' ?
      this.datePipe.transform(new Date(), 'yyyy-MM-dd') :
      this.datePipe.transform(new Date(this.signupForm.controls.fechaNacimientoFormControl.value), 'yyyy-MM-dd');

    const modal = await this.modalCtrl.create({
      component: ModalDateComponent,
      componentProps: { data: currentDate },
      cssClass: 'datetime-modal'
    });

    modal.onDidDismiss()
      .then((data) => {
        this.signupForm.controls.fechaNacimientoFormControl.setValue(this.datePipe.transform(new Date(data.data), 'mediumDate'));
        //console.log(new Date(this.signupForm.controls.fechaNacimientoFormControl.value.toString()));
    });

    return await modal.present();
  }

  onSignup(){
  }

  hideShowPassword() {
    this.passwordType = this.passwordType === 'text' ? 'password' : 'text';
    this.passwordIcon = this.passwordIcon === 'eye-off' ? 'eye' : 'eye-off';
  }

  hideShowRepeatPassword() {
    this.passwordRepeatType = this.passwordRepeatType === 'text' ? 'password' : 'text';
    this.passwordRepeatIcon = this.passwordRepeatIcon === 'eye-off' ? 'eye' : 'eye-off';
  }

}
