import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { MemoryFrutasService } from '../../services/memory_frutas.service';



@Component({
  selector: 'app-game-crono1',
  templateUrl: './game-crono1.component.html',
  styleUrls: ['./game-crono1.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GameCrono1Component implements OnInit {

  /**
   * constructor method
   * @param memoryService instance of the service that manage the game
   * @param cdr instance of the service for detect changes
   */
  constructor(
    public memoryService: MemoryFrutasService,
    private cdr: ChangeDetectorRef,
  ) { }

  /**
   * ngOnInit
   * starts a subscription to control if the crono is started to check the changes in the view
   */
  ngOnInit(): void {
    this.memoryService.cronoOn.subscribe(() => {
      this.cdr.markForCheck();
    });
  }

}
