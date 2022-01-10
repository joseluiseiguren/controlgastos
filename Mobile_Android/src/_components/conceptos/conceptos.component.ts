import { Component, OnInit } from '@angular/core';
import { ConceptoService } from '../../services/concepto.service';
import { IConcepto } from '../../models/concepto';
import { HelperService } from '../../services/helper.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ConceptoDialogComponent } from '../concepto-dialog/concepto-dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { firstValueFrom } from 'rxjs';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-conceptos',
  templateUrl: './conceptos.component.html',
  styleUrls: ['./conceptos.component.css']
})
export class ConceptosComponent implements OnInit {
  displayedColumns: string[] = ['concepto', 'tipo'];
  loading = false;
  conceptos: IConcepto[] = [];

  get debitTitle(): string {
    return this.translate.instant("concept.debit");
  }

  get creditTitle(): string {
    return this.translate.instant("concept.credit");
  }

  constructor(private _conceptoService: ConceptoService,
              private _helperService: HelperService,
              public conceptoDialog: MatDialog,
              public translate: TranslateService,
              public snackBar: MatSnackBar) { }

  ngOnInit() {
    this.getConceptos();
  }

  async getConceptos(): Promise<void> {
    this.loading = true;

    const source$ = this._conceptoService.getConceptos();

    try {
      const data = await firstValueFrom(source$);

      this.conceptos = data;
      this.loading = false;

    } catch (error) {
      this.loading = false;
      this._helperService.showSnackBarError(this.snackBar, this._helperService.getErrorMessage(error));
    }

  }

  openConceptoDialog(concepto: IConcepto | null) : void {
    const dialogRef = this.conceptoDialog.open(ConceptoDialogComponent, { data: {concepto} });

    dialogRef.afterClosed()
      .subscribe(result => {
        if (result !== undefined) {
          this.getConceptos();
        }
      });
  }

}
