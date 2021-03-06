import { ComponentBase } from './../../services/componentBase';
import { Component, OnInit, ChangeDetectorRef, OnDestroy } from '@angular/core';
import { UsersService } from '../../services/users.service';
import { Router, NavigationEnd } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { AboutComponent } from '../about/about.component';
import { MediaMatcher } from '@angular/cdk/layout';
import { filter } from 'rxjs/operators';
import { UrlConstants } from '../../constants/url.constants';
import { Subscription } from 'rxjs';
import { DatePipe } from '@angular/common';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent extends ComponentBase implements OnInit, OnDestroy {
  userName: string;
  actualPageTitle: string;
  private _subscriptions = new Subscription();

  constructor(private _userService: UsersService,
              private router: Router,
              private _datePipe: DatePipe,
              private changeDetectorRef: ChangeDetectorRef,
              private media: MediaMatcher,
              public translate: TranslateService,
              public aboutDialog: MatDialog) {
    super(changeDetectorRef, media);

    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd))
        .subscribe((event: any) => {
          this.actualPageTitle = this.getPageTitle(event.url);
      });
  }

  ngOnInit() {
    this._subscriptions.add(this._userService.userName
      .subscribe((username) => {
        this.userName = username;
      })
    );
  }

  routeDiario () {
    const today = this._datePipe.transform(new Date(), 'yyyy-MM-dd');
    this.router.navigate([UrlConstants.DASHBOARD, UrlConstants.DIARIO, today]);
  }

  routeMensual () {
    const month = this._datePipe.transform(new Date(), 'yyyy-MM');
    this.router.navigate([UrlConstants.DASHBOARD, UrlConstants.MENSUAL, month, 'none']);
  }

  routeAnual () {
    this.router.navigate([UrlConstants.DASHBOARD, UrlConstants.ANUAL, new Date().getFullYear(), 'none']);
  }

  routeHistorico () {
    this.router.navigate([UrlConstants.DASHBOARD, UrlConstants.HISTORICO]);
  }

  routeConceptos () {
    this.router.navigate([UrlConstants.DASHBOARD, UrlConstants.CONCEPTOS]);
  }

  routeUserProfile () {
    this.router.navigate([UrlConstants.DASHBOARD, UrlConstants.USERS, UrlConstants.USERPROFILE]);
  }

  logout () {
    this._userService.logout();
    this.router.navigate([UrlConstants.LOGIN]);
  }

  ngOnDestroy(): void {
    this._subscriptions.unsubscribe();
    super.ngOnDestroy();
  }

  about(): void {
    this.aboutDialog.open(AboutComponent, {
      width: '250px'
    });
  }

  getPageTitle(url: string): string {
    const prefix = '/' + UrlConstants.DASHBOARD + '/';

    if (url.startsWith(prefix + UrlConstants.DIARIO)) {
      return ' - ' + this.translate.instant('menu.daily');
    }

    if (url.startsWith(prefix + UrlConstants.MENSUAL)) {
      return ' - ' + this.translate.instant('menu.monthly');
    }

    if (url.startsWith(prefix + UrlConstants.ANUAL)) {
      return ' - ' + this.translate.instant('menu.annual');
    }

    if (url.startsWith(prefix + UrlConstants.HISTORICO)) {
      return ' - ' + this.translate.instant('menu.historic');
    }

    if (url.startsWith(prefix + UrlConstants.CONCEPTOS)) {
      return ' - ' + this.translate.instant('menu.concepts');
    }

    if (url.startsWith(prefix + UrlConstants.USERS + '/' + UrlConstants.USERPROFILE)) {
      return ' - ' + this.translate.instant('menu.profile');
    }

    return '';
  }
}
