import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
;
import { TranslateService } from '@ngx-translate/core';
import { Observable } from 'rxjs';
import { ModalDialogService } from '../game-card/modal-dialog/modal-dialog.service';
import { MemoryCerealesService } from '../services/memory_cereales.service';

@Component({
  selector: 'app-memory_cereales',
  templateUrl: './memory_cereales.component.html',
  styleUrls: ['./memory_cereales.component.css'],
})
export class MemoryCerealesComponent implements OnInit {

   /**
   * constructor method
   * @param cerealesService instance for the services that manage the game
   * @param modalDialogService instance for the service of the model dialog
   * @param translate instance for the service of translations
   */
    constructor(
      private cerealesService: MemoryCerealesService,
      private modalDialogService: ModalDialogService,
      private translate: TranslateService,
    ) {}

    ngOnInit(): void {
      this.cerealesService.winedGame.subscribe(
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
    return this.cerealesService.started;
  }
}
