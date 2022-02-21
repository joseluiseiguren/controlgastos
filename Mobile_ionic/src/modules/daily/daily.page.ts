import { HelperService } from './../../services/helper.service.service';
import { SnackBarService } from './../../services/snackBar.service';
/* eslint-disable no-throw-literal */
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { firstValueFrom } from 'rxjs';
import { DiarioService } from 'src/services/diario.service';
import { IConceptoDiario } from 'src/models/concepto.diario';
import { UsersService } from 'src/services/users.service';

@Component({
  selector: 'app-daily',
  templateUrl: './daily.page.html',
  styleUrls: ['./daily.page.scss'],
})
export class DailyPage implements OnInit {
  loading = false;
  currentDate: Date;
  conceptos: IConceptoDiario[];

  constructor(private diarioService: DiarioService,
              private snackBarService: SnackBarService,
              public userService: UsersService,
              private helperService: HelperService,
              private activeRoute: ActivatedRoute) { }

  async ngOnInit() {
    this.activeRoute.params
      .subscribe(routeParams => {
        const controlDate = this.getDateFromUrl();
        controlDate.setMonth(controlDate.getMonth());
        this.currentDate = controlDate;

        this.getData();
      });
  }

  async getData(): Promise<void> {
    this.loading = true;


    const source$ = this.diarioService.getConceptosImportes(this.currentDate);

    try {
      const data = await firstValueFrom(source$);

      this.conceptos = data;
      //this.saldoDiario = this.getIngresos() - this.getEgresos();
      this.loading = false;

    } catch (error) {
      this.loading = false;
      this.snackBarService.showSnackBarError(this.helperService.getErrorMessage(error));
    }
  }

  private getDateFromUrl(): Date {
    const dateUrl = this.activeRoute.snapshot.paramMap.get('day')?.split('-');
    if (dateUrl === null || dateUrl === undefined) {
      throw 'DateUrl is NULL';
    }
    return new Date(Number(dateUrl[0]), Number(dateUrl[1])-1, Number(dateUrl[2]));
  }

}
