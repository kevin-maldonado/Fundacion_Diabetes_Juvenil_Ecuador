import {
  Component, OnInit, Input,
  ChangeDetectionStrategy, OnDestroy, ChangeDetectorRef,
  Renderer2, ViewChild, ElementRef,
} from '@angular/core';

import { trigger, style, state, transition, animate } from '@angular/animations';
import { Subscription } from 'rxjs';

import { TileImage3 } from '../interfaces3/tile-image3';
import { MemoryCerealesService } from '../../services/memory_cereales.service';

enum tileStates {
  show,
  hidden,
}

@Component({
  selector: 'app-tile-item3',
  templateUrl: './tile-item3.component.html',
  styleUrls: ['./tile-item3.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [
    trigger('tileAnimation', [
      state(tileStates.show.toString(), style({ opacity: 1 })),
      state(tileStates.hidden.toString(), style({ opacity: 0 })),
      transition(`${tileStates.show} <=> ${tileStates.hidden}`, animate('300ms ease-in')),
    ]),
  ]
})
export class TileItem3Component implements OnInit, OnDestroy {

  @Input() tile: TileImage3;
  @ViewChild('tileRef') tileRef: ElementRef;

  tileState: tileStates = tileStates.hidden;
  hideTileSubscription: Subscription;
  showCursorSubscription: Subscription;

  /**
   * constructor method
   * @param cerealesService instance of the service that manage the game
   * @param cdr instance of the service for detect changes
   * @param renderer instance of the angular service for renderer
   */
  constructor(
    private cerealesService: MemoryCerealesService,
    private cdr: ChangeDetectorRef,
    private renderer: Renderer2,
  ) { }

  /**
   * ngOnInit
   * starts a subscription to control that an icon has closed and other to control that must show the cursor
   */
  ngOnInit(): void {
    this.hideTileSubscription = this.cerealesService.hideTiles.subscribe(() => {
      if (this.tileState === tileStates.show && !this.tile.fixed) {
        this.tileState = tileStates.hidden;
        this.cdr.markForCheck();
      }
    });
    this.showCursorSubscription = this.cerealesService.showCursor.subscribe(() => {
      this.showCursor();
    });
  }

  /**
   * ngOnDestroy
   * removes the subscriptions started on init the component
   */
  ngOnDestroy(): void {
    this.hideTileSubscription.unsubscribe();
    this.showCursorSubscription.unsubscribe();
  }

  /**
   * tileLoaded
   * fires when the image of a tile is loaded
   */
  tileLoaded(): void {
    this.cerealesService.tileLoaded();
  }

  /**
   * tileAnimationState
   * returns the state of the tile to start the animation
   */
  tileAnimationState(): tileStates {
    return this.tileState;
  }

  /**
   * showTile
   * fires when the user clicks on a tile and shows the image
   * @param event event emitted on click with the mouse
   */
  showTile(event: Event): void {
    event.stopPropagation();
    if (!this.cerealesService.tilesBlocked && this.tileState === tileStates.hidden) {
      this.cerealesService.tilesBlocked = true;
      this.tileState = tileStates.show;
    }
  }

  /**
   * tile
   * hides the cursors, because the tile actions are blocked
   * @param tile an object tile
   */
  blockTile(tile: TileImage3): void {
    this.hideCursor();
  }

  /**
   * checkTitle
   * checks the state of the tile for execute the actions according the state
   * @param tile an object tile
   */
  checkTile(tile: TileImage3): void {
    if (this.tileState === tileStates.show) {
      this.cerealesService.setTurnTile(tile);
    } else if (this.tileState === tileStates.hidden) {
      this.cerealesService.tilesBlocked = false;
    }
    if (!this.cerealesService.secondTileSetted) {
      this.showCursor();
    }
  }

  /**
   * showCursor
   * shows the cursor
   */
  private showCursor(): void {
    this.renderer.removeClass(this.tileRef.nativeElement, 'no-cursor');
  }

  /**
   * hideCursor
   * hides the cursor
   */
  private hideCursor(): void {
    this.renderer.addClass(this.tileRef.nativeElement, 'no-cursor');
  }
}
