import { Component, OnInit, Inject } from '@angular/core';
import { IConceptoDiario } from '../../models/concepto.diario';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';
import { FormatingService } from '../../sharedServices/formatingService';
import { DiarioService } from '../../services/diario.service';
import { HelperService } from '../../services/helper.service';
import {COMMA, ENTER} from '@angular/cdk/keycodes';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatChipInputEvent } from '@angular/material/chips';
import { firstValueFrom } from 'rxjs';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-diario-enter',
  templateUrl: './diario-enter.component.html',
  styleUrls: ['./diario-enter.component.css']
})
export class DiarioEnterComponent implements OnInit {
  form: FormGroup;
  loading = false;
  readonly separatorKeysCodes: number[] = [ENTER, COMMA];
  tags: string[] = [];

  constructor(private fb: FormBuilder,
              private formating: FormatingService,
              private _conceptosDiarioService: DiarioService,
              public snackBar: MatSnackBar,
              private _helperService: HelperService,
              public translate: TranslateService,
              public dialogRef: MatDialogRef<DiarioEnterComponent>,
              @Inject(MAT_DIALOG_DATA) public data: {concepto: IConceptoDiario}) { }

  ngOnInit() {
    this.form = this.fb.group({
      importeFormControl: [this.formating.FormatNumber(this.data.concepto.ammount, true, false), [Validators.required]],
      debitoCreditoControl: this.isCredito().toString() === 'true' ? '1' : '0'
    });
    this.tags = this.data.concepto.tags;
  }

  onCancel(): void {
    this.dialogRef.close();
  }

  async onSave(): Promise<void> {
    this.loading = true;

    const dateSplitted = this.data.concepto.transactionDate.split('-');
    const trasactionDate = new Date(parseInt(dateSplitted[0]), parseInt(dateSplitted[1])-1, parseInt(dateSplitted[2]));

    const newImporte = parseFloat(this.form.value.importeFormControl.toString().replace(',', '.'));

    const source$ = this._conceptosDiarioService.setConceptoImporte(
                                                          trasactionDate,
                                                          (this.form.value.debitoCreditoControl === '1') ? newImporte : newImporte * -1,
                                                          this.data.concepto.conceptId,
                                                          this.tags);

    try {

      await firstValueFrom(source$);

      this.data.concepto.ammount = (this.form.value.debitoCreditoControl === '1' || this.form.value.importeFormControl === 0)
                                              ? newImporte
                                              : newImporte * -1;
        this.data.concepto.credit = this.form.value.debitoCreditoControl;
        this.dialogRef.close(this.data.concepto);

    } catch (error) {
      this.loading = false;
      this._helperService.showSnackBarError(this.snackBar, this._helperService.getErrorMessage(error));
    }
  }

  private isCredito(): boolean {
    if (this.data.concepto.ammount === 0) {
      return this.data.concepto.credit;
    } else {
      if (this.data.concepto.ammount > 0) {
        return true;
      } else {
        return false;
      }
    }
  }

  removeTag(tag: string): void {
    const index = this.tags.indexOf(tag);

    if (index >= 0) {
      this.tags.splice(index, 1);
    }
  }

  addTag(event: MatChipInputEvent): void {
    const input = event.input;
    const value = event.value;

    if (this.tags.filter(x => x.toLowerCase() === value.toLowerCase()).length <= 0) {
      if ((value || '').trim()) {
        this.tags.push(value);
      }
    }

    if (input) {
      input.value = '';
    }
  }
}
