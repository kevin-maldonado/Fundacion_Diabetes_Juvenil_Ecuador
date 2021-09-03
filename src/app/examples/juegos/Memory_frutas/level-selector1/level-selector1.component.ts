import { Component, ChangeDetectionStrategy, HostBinding } from '@angular/core';

import { TranslateService } from '@ngx-translate/core';
import { MemoryFrutasService } from '../../services/memory_frutas.service';

import { levels1 } from '../enums1/enums1';

@Component({
  selector: 'app-level-selector1',
  templateUrl: './level-selector1.component.html',
  styleUrls: ['./level-selector1.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LevelSelector1Component {

  @HostBinding('style.width') width = '100%';

  levelsValues: string[] = [];

  /**
   * constructor method
   * gets the values of the levels
   * @param memoryService instance of the service that manage the game
   * @param translate instance of service for translations
   */
  constructor(
    public memoryService: MemoryFrutasService,
    private translate: TranslateService,
  ) {
    const levelsKeys = Object.keys(levels1);
    this.levelsValues = levelsKeys.slice(-(levelsKeys.length / 2));
  }

  /**
   * selectLevel
   * changes the level of the game
   * @param level id of the level selected
   */
  selectLevel(level: string) {
    this.memoryService.level = levels1[level];
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
