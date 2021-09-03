import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

import { TranslateService } from '@ngx-translate/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { languages1 } from '../enums1/enums1';

@Component({
  selector: 'app-language-selector1',
  templateUrl: './language-selector1.component.html',
  styleUrls: ['./language-selector1.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LanguageSelector1Component implements OnInit {

  public langKeys: string[] = [];

  /**
   * constructor method
   * @param translate instance of service for translations
   */
  constructor(
    private translate: TranslateService,
  ) {}

  /**
   * ngOnInit
   * get the keys of the available languages
   */
  ngOnInit(): void {
    this.langKeys = Object.keys(languages1);
    this.langKeys = this.langKeys.slice(-(this.langKeys.length / 2));
  }

  /**
   * changeLanguage
   * changes the language of the game
   * @param lang id of the language to use
   */
  changeLanguage(lang: string): void {
    this.translate.use(lang);
  }

  /**
   * getLanguageName
   * gets the name of a language
   * @param lang id of the language
   */
  getLanguageName(lang: string): string {
    return this.translate.instant(`language-selector.languages.${lang}.title`);
  }

  /**
   * getLanguageIcon
   * gets the icon of a language
   * @param lang id of the language
   */
  getLanguageIcon(lang: string): Observable<string> {
    return this.translate.get(`language-selector.languages.${lang}.icon`)
      .pipe(map(data => `assets/icons/${data}.svg`));
  }
}
