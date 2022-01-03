import { HelperService } from './../../services/helper.service';
import { ConceptoService } from './../../services/concepto.service';
import { IMensualFilter } from './../../models/mensual.filter';
import { IConcepto } from './../../models/concepto';
import { Component, OnInit, Inject, ViewChild, ElementRef } from '@angular/core';
import { firstValueFrom } from 'rxjs';
import { ENTER, COMMA } from '@angular/cdk/keycodes';
import { MatAutocompleteSelectedEvent, MatAutocompleteTrigger } from '@angular/material/autocomplete';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatChipInputEvent } from '@angular/material/chips';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-filter-popup',
  templateUrl: './filter-popup.component.html',
  styleUrls: ['./filter-popup.component.css']
})
export class FilterPopupComponent implements OnInit {

  loading = false;
  private _allConceptos: IConcepto[] = [];
  public allConceptos: IConcepto[] = [];
  public allConceptosFiltered: IMensualFilter;
  readonly separatorKeysCodes: number[] = [ENTER, COMMA];
  filterInput: string;

  @ViewChild('trigger', {static: false}) autocomplete: MatAutocompleteTrigger;
  @ViewChild('cancelButton', {static: false}) cancelButton: ElementRef;

  constructor(private _conceptoService: ConceptoService,
              private _helperService: HelperService,
              public snackBar: MatSnackBar,
              public translate: TranslateService,
              public dialogRef: MatDialogRef<FilterPopupComponent>,
              @Inject(MAT_DIALOG_DATA) allFilters: IMensualFilter) {
    this.allConceptosFiltered = allFilters;
  }

  ngOnInit() {
    this.getConceptos();
  }

  async getConceptos() : Promise<void>{
    this.loading = true;

    const source$ = this._conceptoService.getConceptos();

    try {

      const data = await firstValueFrom(source$);

      this._allConceptos = data;
      this.allConceptos = data;
      this.loading = false;

    } catch (error) {
      this.loading = false;
      this._helperService.showSnackBarError(this.snackBar, this._helperService.getErrorMessage(error));
    }
  }

  onChangeConcepto(event: string) {
    if (event) {
      this.allConceptos = this._allConceptos.filter(x => x.descripcion.toLowerCase().startsWith(event.toLowerCase()));
    } else {
      this.allConceptos = this._allConceptos.filter(x => 1 === 1);
    }
  }

  onCancel(): void {
    this.dialogRef.close();
  }

  onSave(): void {
    this.dialogRef.close( this.allConceptosFiltered );
  }

  removeConceptoFiltered(concepto: IConcepto): void {
    const index = this.allConceptosFiltered.conceptos.map(e => e.descripcion.toLowerCase()).indexOf(concepto.descripcion.toLowerCase());

    if (index >= 0) {
      this.allConceptosFiltered.conceptos.splice(index, 1);
    }
  }

  onAddConceptoFiltered(event: MatChipInputEvent): void {
    this.addConceptoFiltered(this.filterInput);
  }

  private addConceptoFiltered(conceptoToAdd: string): void {
    if ((conceptoToAdd || '').trim()) {
      const concep = this._allConceptos.filter(x => x.descripcion.toLowerCase().startsWith(conceptoToAdd.toLowerCase()));
      if (concep.length > 0) {
        if (!this.existConceptoFilter(concep[0].descripcion)) {
          this.allConceptosFiltered.conceptos.push(concep[0]);
        }
      }
    }

    this.filterInput = '';
    this.autocomplete.closePanel();
  }

  selected(event: MatAutocompleteSelectedEvent): void {
    this.addConceptoFiltered(event.option.viewValue.toLowerCase());
  }

  private existConceptoFilter(concepto: string): boolean {
     return this.allConceptosFiltered.conceptos.filter(x => x.descripcion.toLowerCase() === concepto.toLowerCase()).length > 0;
  }

  onDeleteFilters() {
    this.allConceptosFiltered.conceptos = [];
  }
}
