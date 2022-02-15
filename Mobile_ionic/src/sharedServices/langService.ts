export class LangService {

  langsLocal: any[] = [
    {value: 'es', viewValue: 'Es', image: './../../assets/icons/esFlag.png'},
    {value: 'fr', viewValue: 'Fr', image: './../../assets/icons/frFlag.png'},
    {value: 'en', viewValue: 'En', image: './../../assets/icons/enFlag.png'}
  ];

  get defaultLang(): string{
    return 'es';
  }

  public  getLangImage(currentLang: string): string {
    return this.langsLocal.find(x => x.value === currentLang).image;
  }
}
