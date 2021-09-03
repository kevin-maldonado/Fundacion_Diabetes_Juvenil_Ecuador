import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
;
import { TranslateService } from '@ngx-translate/core';
import { Observable } from 'rxjs';
import { ModalDialogService } from '../game-card/modal-dialog/modal-dialog.service';
import { MemoryFrutasService } from '../services/memory_frutas.service';

@Component({
  selector: 'app-memory_frutas',
  templateUrl: './memory_frutas.component.html',
  styleUrls: ['./memory_frutas.component.css'],
})
export class MemoryfrutasComponent implements OnInit {

   /**
   * constructor method
   * @param memoryService instance for the services that manage the game
   * @param modalDialogService instance for the service of the model dialog
   * @param translate instance for the service of translations
   */
    constructor(
      private memoryService: MemoryFrutasService,
      private modalDialogService: ModalDialogService,
      private translate: TranslateService,
    ) {}

    ngOnInit(): void {
      this.memoryService.winedGame.subscribe(
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
    return this.memoryService.started;
  }
}
