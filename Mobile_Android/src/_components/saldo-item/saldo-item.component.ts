import { Component, Input, Output, EventEmitter } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { ISaldoItem } from '../../models/saldoItem';
import { UsersService } from '../../services/users.service';

@Component({
  selector: 'app-saldo-item',
  templateUrl: './saldo-item.component.html',
  styleUrls: ['./saldo-item.component.css']
})
export class SaldoItemComponent {

  @Input() items: ISaldoItem[];
  @Output() itemClicked = new EventEmitter();

  constructor(public _userService: UsersService, public translate: TranslateService) { }

  onGoDetails (item: ISaldoItem) {
    this.itemClicked.emit(item);
  }

}
