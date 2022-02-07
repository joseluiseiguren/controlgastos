import { Component, OnInit, Inject } from '@angular/core';
import { IConcepto } from '../../models/concepto';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ConceptoService } from '../../services/concepto.service';
import { HelperService } from '../../services/helper.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { firstValueFrom } from 'rxjs';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-concepto-dialog',
  templateUrl: './concepto-dialog.component.html',
  styleUrls: ['./concepto-dialog.component.css']
})
export class ConceptoDialogComponent implements OnInit {
  form: FormGroup;
  loading = false;

  get newConceptTitle(): string{
    return this.translate.instant('concept.newConcept');
  }

  get editConceptTitle(): string{
    return this.translate.instant('concept.editConcept');
  }

  constructor(private fb: FormBuilder,
              private snackBar: MatSnackBar,
              private _conceptoService: ConceptoService,
              private _helperService: HelperService,
              public translate: TranslateService,
              public dialogRef: MatDialogRef<ConceptoDialogComponent>,
              @Inject(MAT_DIALOG_DATA) public data: {concepto: IConcepto}) { }

  ngOnInit() {
    this.form = this.fb.group({
      conceptoFormControl: [this.data.concepto ? this.data.concepto.descripcion : '', Validators.required],
      debitoCreditoControl: this.data.concepto !== undefined && this.data.concepto.credito === true ? '1' : '0'
    });
  }

  onCancel(): void {
    this.dialogRef.close();
  }

  onSave(): void {
    this.loading = true;
    this.form.value.conceptoFormControl = this._helperService.toCamelCase(this.form.value.conceptoFormControl);

    // Alta
    if (this.data.concepto === null){
      this.newConcepto();
    } else {
      // Modificacion
      this.modifyConcepto();
    }
  }

  private async newConcepto(): Promise<void> {

    const source$ = this._conceptoService.insertConcepto(this.form.value.conceptoFormControl.toString(),
                                                         this.form.value.debitoCreditoControl === "0" ? false : true);

    try {
      const data = await firstValueFrom(source$);

      this._helperService.showSnackBarInformation(this.snackBar, this.translate.instant('message.successfulOperation'));
      this.dialogRef.close(true);

    } catch (error) {
      this.loading = false;
      this._helperService.showSnackBarError(this.snackBar, this._helperService.getErrorMessage(error));
    }
  }

  private async modifyConcepto(): Promise<void> {

    const source$ = this._conceptoService.updateConcepto(this.data.concepto.id,
                                                          this.form.value.conceptoFormControl.toString(),
                                                          this.form.value.debitoCreditoControl === "0" ? false : true);

    try {
      const data = await firstValueFrom(source$);

      this.loading = false;
      this._helperService.showSnackBarInformation(this.snackBar, this.translate.instant('message.successfulOperation'));
      this.dialogRef.close(true);

    } catch (error) {
      this.loading = false;
      this._helperService.showSnackBarError(this.snackBar, this._helperService.getErrorMessage(error));
    }

  }
}
