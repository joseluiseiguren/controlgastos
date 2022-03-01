/* eslint-disable max-len */
import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { TranslateService } from '@ngx-translate/core';
import { ColorThemeService } from 'src/services/color-theme.service';
import { LangService } from 'src/services/lang.service.service';

@Component({
  selector: 'app-modal-settings',
  templateUrl: './modal-settings.component.html',
  styleUrls: ['./modal-settings.component.scss'],
})
export class ModalSettingsComponent implements OnInit {
  data: any;
  currentLang = this.translate.currentLang;
  selectedLang = { 'padding-left': '1rem', 'background-repeat': 'no-repeat', 'background-image':`url(./../../../assets/icon/${this.translate.currentLang}Flag.png)`};

  constructor(private modalCtrl: ModalController,
              public translate: TranslateService,
              private colorThemeService: ColorThemeService,
              public langService: LangService) {
  }

  get modeDarkOn(): boolean {
    return this.colorThemeService.getCurrentTheme() === 'dark';
  }

  ngOnInit() {}

  async closeModal(){
    const modal = await this.modalCtrl.getTop();
    if (modal) {
      modal.dismiss(this.data);
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

  public changeTheme(e){
    if (e.detail.checked === true) {
      this.colorThemeService.setColorTheme('dark');
    } else {
      this.colorThemeService.setColorTheme('light');
    }
  }
}
