import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { TranslateService } from '@ngx-translate/core';
import { ISaldoItem } from 'src/models/saldoItem';
import { UsersService } from 'src/services/users.service';

@Component({
  selector: 'app-modal-balance',
  templateUrl: './modal-balance.component.html',
  styleUrls: ['./modal-balance.component.scss'],
})
export class ModalBalanceComponent implements OnInit {

  data: ISaldoItem[] = [];

  constructor(private modalCtrl: ModalController,
              public userService: UsersService,
              public translateService: TranslateService) { }

  ngOnInit() {
    console.log(this.data);
  }

}
