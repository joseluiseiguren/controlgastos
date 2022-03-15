/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable guard-for-in */
import { environment } from 'src/environments/environment';
import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { LangService } from 'src/services/lang.service.service';
import { UrlConstants } from 'src/constants/url.constants';
import { UsersService } from 'src/services/users.service';
import { ColorThemeService } from 'src/services/color-theme.service';
import { MenuController, ModalController, Platform } from '@ionic/angular';
import { ModalAboutComponent } from 'src/components/modal-about/modal-about.component';

import { Plugins } from '@capacitor/core';
import { NavigationEnd, Router } from '@angular/router';

const { App } = Plugins;

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit {
  userName = '';
  private navHistory: string[] = [];

  constructor(public translate: TranslateService,
              private platform: Platform,
              private router: Router,
              private userService: UsersService,
              public menuCtrl: MenuController,
              private modalCtrl: ModalController,
              private colorThemeService: ColorThemeService,
              private langService: LangService) {

    const availableLangs = this.langService.langsLocal.map(x => x.value);

    translate.addLangs(availableLangs);
    translate.setDefaultLang(this.langService.defaultLang);
    translate.use(this.langService.defaultLang);

    this.colorThemeService.initTheme();

    // for (let i = 0; i < sessionStorage.length; i++) {
    //   const key = sessionStorage.key(i);
    //   //console.log('Key: ' + key);
    //   alert(key);
    // }

    // alert(sessionStorage.length);
  }

  get dailyLink(): string {
    return UrlConstants.daily;
  }

  get monthlyLink(): string {
    return UrlConstants.monthly;
  }

  get yearLink(): string {
    return UrlConstants.year;
  }

  get historicLink(): string {
    return UrlConstants.historical;
  }

  get conceptsLink(): string {
    return UrlConstants.concepts;
  }

  get userProfileLink(): string {
    return UrlConstants.userProfile;
  }

  get userLoginLink(): string {
    return UrlConstants.logIn;
  }

  ngOnInit(): void {
    if (this.userService.isSessionExpired()){
      this.menuCtrl.enable(false);
    } else {
      this.menuCtrl.enable(true);
    }

    this.userService.userName.subscribe(x => {
      this.userName = x;
    });

    //alert(environment.apiUrl);

    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.navHistory.push(event.urlAfterRedirects);
      }
    });

    this.platform.backButton.subscribeWithPriority(10, () => {
      const urlToGo = this.navHistory.pop();
      this.goToUrl(urlToGo);
    });
  }

  logout(){
    this.userService.logout();
    window.location.reload();
  }

  async showAbout(){
    const modal = await this.modalCtrl.create({
      component: ModalAboutComponent,
      componentProps: { data: null },
      cssClass: 'about-modal'
    });

    modal.onDidDismiss()
      .then((data) => {
        if (data.data){
        }
    });

    return await modal.present();
  }

  private goToUrl(urlToGo: string){
    if (urlToGo !== undefined && urlToGo !== '/' + UrlConstants.logIn){
      if (urlToGo === this.router.url){
        urlToGo = this.navHistory.pop();
        this.goToUrl(urlToGo);
      } else {
        this.router.navigate([urlToGo]);
      }
    } else {
      App.exitApp();
    }
  }
}
