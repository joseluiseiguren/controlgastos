import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.scss'],
})
export class FavoriteComponent implements OnInit {

  @Input() on = false;
  @Output() starClicked = new EventEmitter();

  constructor() { }

  ngOnInit() {}

  onClick() {
    this.on = !this.on;
    this.starClicked.emit(this.on);
  }

}
