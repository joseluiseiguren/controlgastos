import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ModalSettingsComponent } from '../modal-settings/modal-settings.component';

@Component({
  selector: 'app-setting',
  templateUrl: './setting.component.html',
  styleUrls: ['./setting.component.scss'],
})
export class SettingComponent implements OnInit {

  @Input() showLanguage = false;

  constructor(private modalCtrl: ModalController) { }

  ngOnInit() {}

  async openSettings(){
    const modal = await this.modalCtrl.create({
      component: ModalSettingsComponent,
      componentProps: { data: {showLanguage: this.showLanguage} },
      cssClass: 'settings-modal'
    });

    modal.onDidDismiss()
      .then((data) => {}
    );

    return await modal.present();
  }

}
