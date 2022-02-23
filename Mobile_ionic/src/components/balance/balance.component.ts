import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { UsersService } from 'src/services/users.service';

@Component({
  selector: 'app-balance',
  templateUrl: './balance.component.html',
  styleUrls: ['./balance.component.scss'],
})
export class BalanceComponent implements OnInit {

  @Input() title = '';
  @Input() balance = 0;
  @Output() saldoClicked = new EventEmitter();

  constructor(public userService: UsersService) { }

  onClick() {
    this.saldoClicked.emit();
  }

  ngOnInit() {}

}
