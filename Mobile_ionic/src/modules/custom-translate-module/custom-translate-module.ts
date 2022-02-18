import { HttpClient } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

// eslint-disable-next-line prefer-arrow/prefer-arrow-functions
export function httpTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http);
}
