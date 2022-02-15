import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LangService {

  langsLocal: any[] = [
    {value: 'es', viewValue: 'Es', image: './../../assets/icons/esFlag.png'},
    {value: 'fr', viewValue: 'Fr', image: './../../assets/icons/frFlag.png'},
    {value: 'en', viewValue: 'En', image: './../../assets/icons/enFlag.png'}
  ];

  get defaultLang(): string{
    const lastLangUsed = localStorage.getItem('lastLangUsed');
    if (lastLangUsed === null) {
        return 'en';
    }
    return lastLangUsed;
  }

  public  getLangImage(currentLang: string): string {
    return this.langsLocal.find(x => x.value === currentLang).image;
  }
}

