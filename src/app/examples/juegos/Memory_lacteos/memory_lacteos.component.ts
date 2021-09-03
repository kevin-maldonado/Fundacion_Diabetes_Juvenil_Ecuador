import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
;
import { TranslateService } from '@ngx-translate/core';
import { Observable } from 'rxjs';
import { ModalDialogService } from '../game-card/modal-dialog/modal-dialog.service';
import { MemoryLacteosService } from '../services/memory_lacteos.service';

@Component({
  selector: 'app-memory_lacteos',
  templateUrl: './memory_lacteos.component.html',
  styleUrls: ['./memory_lacteos.component.css'],
})
export class MemoryLacteosComponent implements OnInit {

   /**
   * constructor method
   * @param lacteosService instance for the services that manage the game
   * @param modalDialogService instance for the service of the model dialog
   * @param translate instance for the service of translations
   */
    constructor(
      private lacteosService: MemoryLacteosService,
      private modalDialogService: ModalDialogService,
      private translate: TranslateService,
    ) {}

    ngOnInit(): void {
      this.lacteosService.winedGame.subscribe(
        (value) => {
          if (value) {
            this.modalDialogService.newDialog({
              title: this.translate.instant('finish-message.title'),
              message: this.translate.instant('finish-message.win-game'),
              clickOverlayCloses: true,
            });
            this.modalDialogService.openDialog();
          }
        }
      );
    }
      /**
   * returns if the game is started or not
   */
  getGameStarted(): Observable<boolean> {
    return this.lacteosService.started;
  }
}
