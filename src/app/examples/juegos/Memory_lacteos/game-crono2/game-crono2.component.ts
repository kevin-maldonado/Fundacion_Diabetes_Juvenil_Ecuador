import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { MemoryLacteosService } from '../../services/memory_lacteos.service';



@Component({
  selector: 'app-game-crono2',
  templateUrl: './game-crono2.component.html',
  styleUrls: ['./game-crono2.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GameCrono2Component implements OnInit {

  /**
   * constructor method
   * @param lacteosService instance of the service that manage the game
   * @param cdr instance of the service for detect changes
   */
  constructor(
    public lacteosService: MemoryLacteosService,
    private cdr: ChangeDetectorRef,
  ) { }

  /**
   * ngOnInit
   * starts a subscription to control if the crono is started to check the changes in the view
   */
  ngOnInit(): void {
    this.lacteosService.cronoOn.subscribe(() => {
      this.cdr.markForCheck();
    });
  }

}
