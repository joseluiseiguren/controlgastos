import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-hide-cero',
  templateUrl: './hide-cero.component.html',
  styleUrls: ['./hide-cero.component.scss'],
})
export class HideCeroComponent implements OnInit {

  @Input() on = false;
  @Output() iconClicked = new EventEmitter();

  constructor() { }

  ngOnInit() {}

  onClick() {
    this.on = !this.on;
    this.iconClicked.emit(this.on);
  }

}
