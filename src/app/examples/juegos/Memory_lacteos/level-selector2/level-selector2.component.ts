import { Component, ChangeDetectionStrategy, HostBinding } from '@angular/core';

import { TranslateService } from '@ngx-translate/core';
import { MemoryLacteosService } from '../../services/memory_lacteos.service';
import { levels2 } from '../enums2/enums2';


@Component({
  selector: 'app-level-selector2',
  templateUrl: './level-selector2.component.html',
  styleUrls: ['./level-selector2.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LevelSelector2Component {

  @HostBinding('style.width') width = '100%';

  levelsValues: string[] = [];

  /**
   * constructor method
   * gets the values of the levels
   * @param lacteosService instance of the service that manage the game
   * @param translate instance of service for translations
   */
  constructor(
    public lacteosService: MemoryLacteosService,
    private translate: TranslateService,
  ) {
    const levelsKeys = Object.keys(levels2);
    this.levelsValues = levelsKeys.slice(-(levelsKeys.length / 2));
  }

  /**
   * selectLevel
   * changes the level of the game
   * @param level id of the level selected
   */
  selectLevel(level: string) {
    this.lacteosService.level = levels2[level];
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
