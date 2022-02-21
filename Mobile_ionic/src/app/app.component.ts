import { environment } from './../environments/environment';
import { Component, Renderer2 } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { LangService } from 'src/services/lang.service.service';
import { UrlConstants } from 'src/constants/url.constants';
import { Router } from '@angular/router';
import { UsersService } from 'src/services/users.service';
import { StorageConstants } from 'src/constants/storage.constants';
import { ColorThemeService } from 'src/services/color-theme.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {

  constructor(public translate: TranslateService,
              private router: Router,
              private userService: UsersService,
              private render: Renderer2,
              private colorThemeService: ColorThemeService,
              private langService: LangService) {

    const availableLangs = this.langService.langsLocal.map(x => x.value);

    translate.addLangs(availableLangs);
    translate.setDefaultLang(this.langService.defaultLang);
    translate.use(this.langService.defaultLang);

    this.colorThemeService.initTheme();
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

  logout(){
    this.userService.logout();
    this.router.navigate([UrlConstants.logIn]);
  }
}
