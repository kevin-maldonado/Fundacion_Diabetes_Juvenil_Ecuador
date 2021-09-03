import { Component, ChangeDetectionStrategy, HostBinding } from '@angular/core';

import { TranslateService } from '@ngx-translate/core';
import { MemoryCerealesService } from '../../services/memory_cereales.service';
import { levels3 } from '../enums3/enums3';


@Component({
  selector: 'app-level-selector3',
  templateUrl: './level-selector3.component.html',
  styleUrls: ['./level-selector3.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LevelSelector3Component {

  @HostBinding('style.width') width = '100%';

  levelsValues: string[] = [];

  /**
   * constructor method
   * gets the values of the levels
   * @param cerealesService instance of the service that manage the game
   * @param translate instance of service for translations
   */
  constructor(
    public cerealesService: MemoryCerealesService,
    private translate: TranslateService,
  ) {
    const levelsKeys = Object.keys(levels3);
    this.levelsValues = levelsKeys.slice(-(levelsKeys.length / 2));
  }

  /**
   * selectLevel
   * changes the level of the game
   * @param level id of the level selected
   */
  selectLevel(level: string) {
    this.cerealesService.level = levels3[level];
  }

  /**
   * getLevelString
   * gets the name of a level
   * @param level id of the level
   */
  getLevelString(level: string): string {
    return this.translate.instant(`level-selector.levels.${level}.title`);
  }
}
