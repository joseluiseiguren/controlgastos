/* eslint-disable max-len */
import { DiarioService } from 'src/services/diario.service';
import { SnackBarService } from 'src/services/snackBar.service';
import { TranslateService } from '@ngx-translate/core';
import { Component, OnInit  } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ModalController } from '@ionic/angular';
import { IConceptoDiario } from 'src/models/concepto.diario';
import { FormatingService } from 'src/sharedServices/formatingService';
import { HelperService } from 'src/services/helper.service.service';

@Component({
  selector: 'app-modal-daily-input',
  templateUrl: './modal-daily-input.component.html',
  styleUrls: ['./modal-daily-input.component.scss'],
})
export class ModalDailyInputComponent implements OnInit {

  data: IConceptoDiario;
  dailyInputForm: FormGroup;
  loading = false;
  operationSelected = '0';

  constructor(private modalCtrl: ModalController,
              public translateService: TranslateService,
              public snackbarService: SnackBarService,
              public helperService: HelperService,
              private formatingService: FormatingService,
              private diarioService: DiarioService,
              public formBuilder: FormBuilder) { }

  ngOnInit() {
    this.dailyInputForm = this.formBuilder.group({
      ammountFormControl: [this.formatingService.FormatNumber(this.data.ammount, true, false), [Validators.required]],
      operationFormControl: [this.data.credit === true ? '1' : '0', [Validators.required]]
    });
  }

  async closeModal(){
    const modal = await this.modalCtrl.getTop();
    if (modal) {
      modal.dismiss(this.data);
    }
  }

  selectAllText(event: any) {
    event.detail.srcElement.select();
  }

  onSubmit() {
    this.loading = true;

    const dateSplitted = this.data.transactionDate.split('-');
    const trasactionDate = new Date(parseInt(dateSplitted[0], 10), parseInt(dateSplitted[1], 10)-1, parseInt(dateSplitted[2], 10));

    const newImporte = parseFloat(this.dailyInputForm.value.ammountFormControl.toString().replace(',', '.'));

    try {

      this.diarioService.setConceptoImporte(trasactionDate,
                                                  (this.dailyInputForm.value.operationFormControl === '1') ? newImporte : newImporte * -1,
                                                  this.data.conceptId,
                                                  null);

      this.data.ammount = (this.dailyInputForm.value.operationFormControl === '1' || this.dailyInputForm.value.ammountFormControl === 0)
                                              ? newImporte
                                              : newImporte * -1;
      this.data.credit = (this.dailyInputForm.value.operationFormControl === '1') ? true : false;
      this.closeModal();

    } catch (error) {
      this.loading = false;
      this.snackbarService.showSnackBarError(this.helperService.getErrorMessage(error));
    }
  }

}
