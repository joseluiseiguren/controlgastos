import { LangService } from './../sharedServices/langService';
import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { InternalLogService } from 'src/sharedServices/internalLogService';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor(translate: TranslateService,
              private langService: LangService,
              private internalLogService: InternalLogService) {

    const availableLangs = this.langService.langsLocal.map(x => x.value);

    translate.addLangs(availableLangs);
    translate.setDefaultLang(this.langService.defaultLang);
    translate.use(this.langService.defaultLang);
  }

  async ngOnInit() {
    await this.internalLogService.createLogFile();
  }
}
