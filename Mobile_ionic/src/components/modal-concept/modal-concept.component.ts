/* eslint-disable max-len */
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ModalController } from '@ionic/angular';
import { TranslateService } from '@ngx-translate/core';
import { IConcepto } from 'src/models/concepto';
import { CacheService } from 'src/services/cache-service.service';
import { ConceptoService } from 'src/services/concepto.service';
import { HelperService } from 'src/services/helper.service.service';
import { SnackBarService } from 'src/services/snackBar.service';

@Component({
  selector: 'app-modal-concept',
  templateUrl: './modal-concept.component.html',
  styleUrls: ['./modal-concept.component.scss'],
})
export class ModalConceptComponent implements OnInit {
  conceptForm: FormGroup;
  loading = false;
  data: IConcepto;
  readonly debit = '0';
  readonly credit = '1';

  constructor(private modalCtrl: ModalController,
              public translateService: TranslateService,
              public snackbarService: SnackBarService,
              public cacheService: CacheService,
              public formBuilder: FormBuilder,
              private conceptService: ConceptoService,
              public helperService: HelperService) { }

  ngOnInit() {
    this.conceptForm = this.formBuilder.group({
      conceptFormControl: [this.data === null ? '' : this.data.descripcion, [Validators.required]],
      operationFormControl: [this.data === null ? this.debit : (this.data.credito === true ? this.credit : this.debit), [Validators.required]],
      favoriteFormControl: [this.data === null ? false : this.data.favorite]
    });
  }

  onSubmit(){
    this.loading = true;
    this.conceptForm.value.conceptFormControl = this.helperService.toCamelCase(this.conceptForm.value.conceptFormControl);

    // New concetp
    if (this.data === null){
      this.newConcept();
    } else {
      // Edit cpnocept
      this.modifyConcepto();
    }
  }

  selectAllText(event: any) {
    event.detail.srcElement.select();
  }

  async closeModal(){
    const modal = await this.modalCtrl.getTop();
    if (modal) {
      modal.dismiss(this.data);
    }
  }

  private async newConcept(): Promise<void> {

    const conceptToInsert = this.createConceptToInsert(null);

    try {
      const idInserted = await this.conceptService.insertConcepto(conceptToInsert.descripcion,
                                                                  conceptToInsert.credito,
                                                                  conceptToInsert.favorite).toPromise();

      conceptToInsert.id = idInserted;
      this.data = conceptToInsert;

      this.cacheService.invalidate();

      this.snackbarService.showSnackBarSuccess(this.translateService.instant('message.successfulOperation'));
      this.closeModal();

    } catch (error) {
      this.loading = false;
      this.snackbarService.showSnackBarError(this.helperService.getErrorMessage(error));
    }
  }

  private async modifyConcepto(): Promise<void> {

    const conceptToUpdate = this.createConceptToInsert(this.data.id);

    try {
      await this.conceptService.updateConcepto(conceptToUpdate.id,
                                                conceptToUpdate.descripcion,
                                                conceptToUpdate.credito,
                                                conceptToUpdate.favorite).toPromise();

      this.data = conceptToUpdate;

      this.snackbarService.showSnackBarSuccess(this.translateService.instant('message.successfulOperation'));
      this.closeModal();

    } catch (error) {
      this.loading = false;
      this.snackbarService.showSnackBarError(this.helperService.getErrorMessage(error));
    }
  }

  private createConceptToInsert(id: string): IConcepto {
    const result = {} as IConcepto;

    result.id = id;
    result.credito = this.conceptForm.value.operationFormControl === this.debit ? false : true;
    result.descripcion = this.conceptForm.value.conceptFormControl.toString();
    result.favorite = this.conceptForm.value.favoriteFormControl;

    return result;
  }

}
