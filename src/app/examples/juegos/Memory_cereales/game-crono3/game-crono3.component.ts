import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { MemoryCerealesService } from '../../services/memory_cereales.service';



@Component({
  selector: 'app-game-crono3',
  templateUrl: './game-crono3.component.html',
  styleUrls: ['./game-crono3.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GameCrono3Component implements OnInit {

  /**
   * constructor method
   * @param cerealesService instance of the service that manage the game
   * @param cdr instance of the service for detect changes
   */
  constructor(
    public cerealesService: MemoryCerealesService,
    private cdr: ChangeDetectorRef,
  ) { }

  /**
   * ngOnInit
   * starts a subscription to control if the crono is started to check the changes in the view
   */
  ngOnInit(): void {
    this.cerealesService.cronoOn.subscribe(() => {
      this.cdr.markForCheck();
    });
  }

}
