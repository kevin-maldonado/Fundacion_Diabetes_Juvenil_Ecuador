import {
  Component, OnInit, Input,
  ChangeDetectionStrategy, OnDestroy, ChangeDetectorRef,
  Renderer2, ViewChild, ElementRef,
} from '@angular/core';

import { trigger, style, state, transition, animate } from '@angular/animations';
import { Subscription } from 'rxjs';

import { TileImage2 } from '../interfaces2/tile-image2';
import { MemoryLacteosService } from '../../services/memory_lacteos.service';

enum tileStates {
  show,
  hidden,
}

@Component({
  selector: 'app-tile-item2',
  templateUrl: './tile-item2.component.html',
  styleUrls: ['./tile-item2.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [
    trigger('tileAnimation', [
      state(tileStates.show.toString(), style({ opacity: 1 })),
      state(tileStates.hidden.toString(), style({ opacity: 0 })),
      transition(`${tileStates.show} <=> ${tileStates.hidden}`, animate('300ms ease-in')),
    ]),
  ]
})
export class TileItem2Component implements OnInit, OnDestroy {

  @Input() tile: TileImage2;
  @ViewChild('tileRef') tileRef: ElementRef;

  tileState: tileStates = tileStates.hidden;
  hideTileSubscription: Subscription;
  showCursorSubscription: Subscription;

  /**
   * constructor method
   * @param lactosService instance of the service that manage the game
   * @param cdr instance of the service for detect changes
   * @param renderer instance of the angular service for renderer
   */
  constructor(
    private lactosService: MemoryLacteosService,
    private cdr: ChangeDetectorRef,
    private renderer: Renderer2,
  ) { }

  /**
   * ngOnInit
   * starts a subscription to control that an icon has closed and other to control that must show the cursor
   */
  ngOnInit(): void {
    this.hideTileSubscription = this.lactosService.hideTiles.subscribe(() => {
      if (this.tileState === tileStates.show && !this.tile.fixed) {
        this.tileState = tileStates.hidden;
        this.cdr.markForCheck();
      }
    });
    this.showCursorSubscription = this.lactosService.showCursor.subscribe(() => {
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
    this.lactosService.tileLoaded();
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
    if (!this.lactosService.tilesBlocked && this.tileState === tileStates.hidden) {
      this.lactosService.tilesBlocked = true;
      this.tileState = tileStates.show;
    }
  }

  /**
   * tile
   * hides the cursors, because the tile actions are blocked
   * @param tile an object tile
   */
  blockTile(tile: TileImage2): void {
    this.hideCursor();
  }

  /**
   * checkTitle
   * checks the state of the tile for execute the actions according the state
   * @param tile an object tile
   */
  checkTile(tile: TileImage2): void {
    if (this.tileState === tileStates.show) {
      this.lactosService.setTurnTile(tile);
    } else if (this.tileState === tileStates.hidden) {
      this.lactosService.tilesBlocked = false;
    }
    if (!this.lactosService.secondTileSetted) {
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
