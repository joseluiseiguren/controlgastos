import { Component, OnInit } from '@angular/core';
import { DiarioService } from 'src/services/diario.service';

@Component({
  selector: 'app-daily',
  templateUrl: './daily.page.html',
  styleUrls: ['./daily.page.scss'],
})
export class DailyPage implements OnInit {

  constructor(private diarioService: DiarioService) { }

  async ngOnInit() {
    const source$ = this.diarioService.getConceptosImportes(new Date());

    /*
    try {
      const data = await firstValueFrom(source$);

      this.conceptos = data;
      this.saldoDiario = this.getIngresos() - this.getEgresos();
      this.loading = false;

    } catch (error) {
      this.loading = false;
      this._helperService.showSnackBarError(this.snackBar, this._helperService.getErrorMessage(error));
    }
    */
  }

}
