import { DeviceInfoService } from './../services/device-info.service';
import { UsersService } from './../services/users.service';
import { ErrorHandler, Injectable, NgZone } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { ErrorService } from 'src/services/error-service.service';
import { SnackBarService } from 'src/services/snackBar.service';

@Injectable()
export class GlobalErrorHandler implements ErrorHandler {
  constructor(
    private zone: NgZone,
    private snackBarService: SnackBarService,
    private translateService: TranslateService,
    private userService: UsersService,
    private deviceInfoService: DeviceInfoService,
    private errorService: ErrorService
  ) {}

  async handleError(error: any) {
    this.zone.run(() =>
      this.snackBarService.showSnackBarError(this.translateService.instant('unhandledError.message'))
    );

    const userId = this.userService.getUserId();

    await this.errorService.sendError(error, this.deviceInfoService.deviceInfo, userId).toPromise();
  }
}
