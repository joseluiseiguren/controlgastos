import { Component, OnInit, Renderer2 } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { LangService } from 'src/services/lang.service.service';
import { UrlConstants } from 'src/constants/url.constants';
import { Router, RouterOutlet } from '@angular/router';
import { UsersService } from 'src/services/users.service';
import { ColorThemeService } from 'src/services/color-theme.service';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit {
  userName = '';

  constructor(public translate: TranslateService,
              private router: Router,
              private userService: UsersService,
              public menuCtrl: MenuController,
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

  ngOnInit(): void {
    if (this.userService.isSessionExpired()){
      this.menuCtrl.enable(false);
    } else {
      this.menuCtrl.enable(true);
    }

    this.userService.userName.subscribe(x => {
      this.userName = x;
    });
  }

  logout(){
    this.userService.logout();
    this.router.navigate([UrlConstants.logIn]);
  }

  showAbout(){}
}
