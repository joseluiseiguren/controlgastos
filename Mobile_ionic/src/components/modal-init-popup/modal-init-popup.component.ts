import { UsersService } from './../../services/users.service';
import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-modal-init-popup',
  templateUrl: './modal-init-popup.component.html',
  styleUrls: ['./modal-init-popup.component.scss'],
})
export class ModalInitPopupComponent implements OnInit {
  constructor(private userService: UsersService,
              private modalCtrl: ModalController) { }

  get userName(): string {
    return this.userService.userName.value;
  }

  ngOnInit() {}

  async closeModal(){
    const modal = await this.modalCtrl.getTop();
    if (modal) {
      modal.dismiss();
    }
  }

}
