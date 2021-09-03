import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { GameService } from '../services/game.service';
import { TranslateService } from '@ngx-translate/core';
import { Observable } from 'rxjs';
import { ModalDialogService } from './modal-dialog/modal-dialog.service';

@Component({
  selector: 'app-gamecard',
  templateUrl: './gamecard.component.html',
  styleUrls: ['./gamecard.component.css'],
})
export class GamecardComponent implements OnInit {

   /**
   * constructor method
   * @param gameService instance for the services that manage the game
   * @param modalDialogService instance for the service of the model dialog
   * @param translate instance for the service of translations
   */
    constructor(
      private gameService: GameService,
      private modalDialogService: ModalDialogService,
      private translate: TranslateService,
    ) {}

    ngOnInit(): void {
      this.gameService.winedGame.subscribe(
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
    return this.gameService.started;
  }
}
