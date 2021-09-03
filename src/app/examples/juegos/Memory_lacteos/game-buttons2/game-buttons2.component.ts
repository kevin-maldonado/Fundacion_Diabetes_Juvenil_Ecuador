import { Component, OnInit, ChangeDetectionStrategy, OnDestroy } from '@angular/core';


import { Subscription } from 'rxjs';
import { TranslateService } from '@ngx-translate/core';
import { ModalDialogService } from '../../game-card/modal-dialog/modal-dialog.service';
import { ButtonType } from '../../game-card/modal-dialog/modal-dialog.enum';
import { MemoryLacteosService } from '../../services/memory_lacteos.service';


const ID_ACCEPT_BUTTON = 'accept-button';
const ID_CANCEL_BUTTON = 'cancel-button';

@Component({
  selector: 'app-game-buttons2',
  templateUrl: './game-buttons2.component.html',
  styleUrls: ['./game-buttons2.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GameButtons2Component implements OnInit, OnDestroy {

  private cancelAction: Subscription;

  /**
   * constructor method
   * @param lacteosService instance of the service that manage the game
   * @param modalDialogService instance of the service for the modal dialog
   * @param translate instance of the service for translations
   */
  constructor(
    public lacteosService: MemoryLacteosService,
    private modalDialogService: ModalDialogService,
    private translate: TranslateService,
  ) { }

  /**
   * ngOnInit
   * starts a subscription for the buttons of the dialog modal
   */
  ngOnInit() {
    this.cancelAction = this.modalDialogService.executeButton.subscribe((idAction) => {
      this.handleCancelAction(idAction);
    });
  }

  /**
   * ngOnDestroy
   * removes the subscription for the buttons of the dialog model
   */
  ngOnDestroy() {
    this.cancelAction.unsubscribe();
  }

  /**
   * playGame
   * starts the game
   */
  playGame(): void {
    this.lacteosService.startGame();
  }

  /**
   * stopGame
   * stops the game
   */
  stopGame(): void {
    this.lacteosService.stopGame();

    this.modalDialogService.newDialog({
      title: this.translate.instant('finish-dialog.title'),
      message: this.translate.instant('finish-dialog.message'),
      buttons: [
        {
          id: ID_ACCEPT_BUTTON,
          label: this.translate.instant(`finish-dialog.${ID_ACCEPT_BUTTON}`),
          type: ButtonType.primary,
        },
        {
          id: ID_CANCEL_BUTTON,
          label: this.translate.instant(`finish-dialog.${ID_CANCEL_BUTTON}`),
          type: ButtonType.secondary,
        },
      ],
      clickOverlayCloses: true,
      emitOnClose: true,
    });
    this.modalDialogService.openDialog();
  }

  /**
   * handelCancelAction
   * manages the actions when the user cancels a dialog
   * @param idAction identificator for the action of the button
   */
  handleCancelAction(idAction: string): void {
    if (idAction === ID_ACCEPT_BUTTON) {
      this.modalDialogService.isClosed.subscribe(() => {
        this.modalDialogService.newDialog({
          title: this.translate.instant('finish-message.title'),
          message: this.translate.instant('finish-message.quit-game'),
          clickOverlayCloses: true,
        });
        this.modalDialogService.openDialog();
      });
      this.modalDialogService.closeDialog();
      this.lacteosService.finishGame();
    } else if (idAction === ID_CANCEL_BUTTON || idAction === this.modalDialogService.closedCrossOverlay) {
      this.modalDialogService.closeDialog();
      this.lacteosService.restartCrono();
    }
  }
}
