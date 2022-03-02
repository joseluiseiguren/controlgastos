import { environment } from 'src/environments/environment';
import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { TranslateService } from '@ngx-translate/core';
import { App, AppInfo } from '@capacitor/app';

@Component({
  selector: 'app-modal-about',
  templateUrl: './modal-about.component.html',
  styleUrls: ['./modal-about.component.scss'],
})
export class ModalAboutComponent implements OnInit {
  appInfo: any = {};
  keys: string[]=[];

  constructor(private modalCtrl: ModalController,
              private tranlateService: TranslateService) { }

  ngOnInit() {
    if (environment.production === true){
      App.getInfo().then((obj: AppInfo) => {
        this.appInfo = obj;
        this.keys = Object.keys(obj);
      });
    } else {
      this.appInfo.version = '1.0';
      this.appInfo.name = 'Money Guard';
    }
  }

  async closeModal(){
    const modal = await this.modalCtrl.getTop();
    if (modal) {
      modal.dismiss();
    }
  }

}
