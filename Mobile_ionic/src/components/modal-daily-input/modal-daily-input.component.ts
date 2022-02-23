import { TranslateService } from '@ngx-translate/core';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ModalController } from '@ionic/angular';
import { IConceptoDiario } from 'src/models/concepto.diario';

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
              public formBuilder: FormBuilder) { }

  ngOnInit() {
    this.dailyInputForm = this.formBuilder.group({
      ammountFormControl: [this.data.ammount, [Validators.required]],
      operationFormControl: [this.data.credit === true ? '1' : '0', [Validators.required]]
    });

  }

  async closeModal(){
    const modal = await this.modalCtrl.getTop();
    if (modal) {
      modal.dismiss(this.data);
    }
  }

  onSubmit(){
  }

}
