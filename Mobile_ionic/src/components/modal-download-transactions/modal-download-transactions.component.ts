import { HelperService } from 'src/services/helper.service.service';
import { DiarioService } from 'src/services/diario.service';
import { SnackBarService } from 'src/services/snackBar.service';
import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-modal-download-transactions',
  templateUrl: './modal-download-transactions.component.html',
  styleUrls: ['./modal-download-transactions.component.scss'],
})
export class ModalDownloadTransactionsComponent implements OnInit {
  loading = false;

  constructor(private modalCtrl: ModalController,
              private tranlateService: TranslateService,
              private dailyService: DiarioService,
              private helperService: HelperService,
              private snackbarService: SnackBarService) { }

  ngOnInit() {}

  async closeModal(){
    const modal = await this.modalCtrl.getTop();
    if (modal) {
      modal.dismiss();
    }
  }

  async confirm(){
    this.loading = true;

    try {
      await this.dailyService.requestDownloadTransactions().toPromise();
      this.loading = false;

      this.snackbarService.showSnackBarSuccess(this.tranlateService.instant('downloadTransactions.successMessaage'));
      await this.closeModal();
    } catch (error) {
      this.loading = false;
      this.snackbarService.showSnackBarError(this.helperService.getErrorMessage(error));
    }
  }
}
