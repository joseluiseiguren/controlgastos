import { LangService } from './../sharedServices/langService';
import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(translate: TranslateService,
              private langService: LangService) {
    const availableLangs = this.langService.langsLocal.map(x => x.value);

    translate.addLangs(availableLangs);
    translate.setDefaultLang(this.langService.defaultLang);
    translate.use(this.langService.defaultLang);
  }
}
