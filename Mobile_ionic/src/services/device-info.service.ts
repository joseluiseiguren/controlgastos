import { Injectable } from '@angular/core';
import { Device } from '@capacitor/device';
import { forkJoin } from 'rxjs';
import { IDeviceInformation } from 'src/models/device.information';

@Injectable({
  providedIn: 'root'
})
export class DeviceInfoService {
  deviceInfo: IDeviceInformation;

  constructor() {
    const pr1 = Device.getInfo();
    const pr2 = Device.getId();

    const resultData: any = forkJoin([pr1, pr2]).subscribe(res => {
      this.deviceInfo = {name: res[0].name,
        manufacturer: res[0].manufacturer,
        model: res[0].model,
        opSystem: res[0].operatingSystem,
        osVersion: res[0].osVersion,
        deviceId: res[1].uuid,
        platform: res[0].platform};
    });
  }
}
