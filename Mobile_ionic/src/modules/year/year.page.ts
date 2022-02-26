import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { TranslateService } from '@ngx-translate/core';
import { HelperService } from 'src/services/helper.service.service';
import { SnackBarService } from 'src/services/snackBar.service';
import { UsersService } from 'src/services/users.service';

@Component({
  selector: 'app-year',
  templateUrl: './year.page.html',
  styleUrls: ['./year.page.scss'],
})
export class YearPage implements OnInit {
  loading = false;
  loadingBalance = false;
  loadingDetail = false;
  annualBalance = 0;
  yearData: any[];
  itemDetail: any[];

  constructor(private activeRoute: ActivatedRoute,
              private datePipe: DatePipe,
              private snackbarService: SnackBarService,
              private translateService: TranslateService,
              private helperService: HelperService,
              public userService: UsersService,
              private modalCtrl: ModalController,
              private router: Router) { }

  ngOnInit() {
  }

  favoriteClicked(event) {
  }

  openBalance() {
  }

  async loadYearDetails(row: any): Promise<void> {
    if (!row.detail.value){
      return;
    }
  }

}
