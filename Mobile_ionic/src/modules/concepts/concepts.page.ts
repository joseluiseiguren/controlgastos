import { SnackBarService } from 'src/services/snackBar.service';
import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { IConcepto } from 'src/models/concepto';
import { HelperService } from 'src/services/helper.service.service';
import { ConceptoService } from 'src/services/concepto.service';
import { ModalController } from '@ionic/angular';
import { ModalConceptComponent } from 'src/components/modal-concept/modal-concept.component';

@Component({
  selector: 'app-concepts',
  templateUrl: './concepts.page.html',
  styleUrls: ['./concepts.page.scss'],
})
export class ConceptsPage implements OnInit {
  loading = false;
  concepts: IConcepto[] = [];

  constructor(private conceptoService: ConceptoService,
              private helperService: HelperService,
              private modalCtrl: ModalController,
              public translateService: TranslateService,
              public snackbarService: SnackBarService) { }

  get debitTitle(): string {
    return this.translateService.instant('concept.debit');
  }

  get creditTitle(): string {
    return this.translateService.instant('concept.credit');
  }

  async ngOnInit() {
    this.loading = true;
    await this.getConceptos();
    this.loading = false;
  }

  async addClicked(){
    const modal = await this.modalCtrl.create({
      component: ModalConceptComponent,
      componentProps: { data: null },
      cssClass: 'concept-modal'
    });

    modal.onDidDismiss()
      .then((data) => {
        if (data.data){
          this.concepts.push(data.data);

          this.sortConceptsList();
        }
    });

    return await modal.present();
  }

  async gridItemClicked(concept: IConcepto) {
    const modal = await this.modalCtrl.create({
      component: ModalConceptComponent,
      componentProps: { data: concept },
      cssClass: 'concept-modal'
    });

    modal.onDidDismiss()
      .then((data) => {
        if (data.data){
          this.concepts = this.concepts.filter(item => item.id !== data.data.id);
          this.concepts.push(data.data);

          this.sortConceptsList();
        }
    });

    return await modal.present();
  }

  private async getConceptos(): Promise<void> {

    try {
      const data = await this.conceptoService.getConceptos().toPromise();

      this.concepts = data;

    } catch (error) {
      this.loading = false;
      this.snackbarService.showSnackBarError(this.helperService.getErrorMessage(error));
    }
  }

  private sortConceptsList(){
    this.concepts = this.concepts.sort((n1,n2) => {
      if (n1.descripcion > n2.descripcion) {
          return 1;
      }

      if (n1.descripcion < n2.descripcion) {
          return -1;
      }

      return 0;
    });
  }

}
