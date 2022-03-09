import { DatePipe } from '@angular/common';
import { Injectable } from '@angular/core';
import { IConceptoDiario } from 'src/models/concepto.diario';

@Injectable({
  providedIn: 'root'
})
export class CacheService {

  private dailyGrid = new Map<string, IConceptoDiario[]>();

  constructor(private datePipe: DatePipe) {
  }

  public invalidate(){
    this.dailyGrid.clear();
  }

  public getDailyGrid(date: Date): IConceptoDiario[] | undefined {
    const key = this.getDailyKey(date);

    let data = this.dailyGrid.get(key);
    if (data === undefined){
      const dataSessionStorage = sessionStorage.getItem(key);
      if (dataSessionStorage !== null){
        data = JSON.parse(dataSessionStorage);
      }
    }
    return data;
  }

  public setDailyGrid(date: Date, dailyData: IConceptoDiario[]){
    const key = this.getDailyKey(date);

    this.dailyGrid.set(key, dailyData);
    sessionStorage.setItem(key, JSON.stringify(dailyData));
  }

  public updateDailyGridItem(date: Date, amount: number, idConcept: number){
    const dailyTransactions = this.getDailyGrid(date);

    const transaction = dailyTransactions.find(x => x.conceptId === idConcept);

    const index = dailyTransactions.indexOf(transaction);

    transaction.credit = amount < 0 ? false : true;
    transaction.ammount = amount;

    dailyTransactions[index] = transaction;

    this.setDailyGrid(date, dailyTransactions);
  }

  private getDailyKey(date: Date){
    return 'dailyData_' + this.datePipe.transform(date, 'yyyy-MM-dd');
  }
}
