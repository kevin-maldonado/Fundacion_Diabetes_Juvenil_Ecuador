import { Component, ChangeDetectionStrategy, ViewChild, Renderer2, ElementRef, AfterViewInit } from '@angular/core';

import { Observable } from 'rxjs';
import { MemoryCerealesService } from '../../services/memory_cereales.service';
import { TileImage3 } from '../interfaces3/tile-image3';



@Component({
  selector: 'app-game-grid3',
  templateUrl: './game-grid3.component.html',
  styleUrls: ['./game-grid3.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GameGrid3Component implements AfterViewInit {
  @ViewChild('gridContainer') gridContainer: ElementRef;

  /**
   * constructor method
   * @param cerealesService instance of the service that manage the game
   * @param renderer instance of the angular renderer service
   */
  constructor(
    private cerealesService: MemoryCerealesService,
    private renderer: Renderer2,
  ) { }

  /**
   * starts a subscription to control the tiles are loaded and it must start the cronometer
   */
  ngAfterViewInit(): void {
    this.cerealesService.tilesOk.subscribe((value) => {
      if (value) {
        this.renderer.setStyle(this.gridContainer.nativeElement, 'height', 'auto');
        this.renderer.removeStyle(this.gridContainer.nativeElement, 'opacity');
        this.cerealesService.startCronoGame();
      }
    });
  }

  /**
   * returns the tiles used in the game
   */
  getGameTiles(): Array<TileImage3> {
    return this.cerealesService.tiles;
  }

  /**
   * returns the level selected by the user
   */
  getLevelClass(): string {
    return this.cerealesService.levelName;
  }

  /**
   * returns if the tiles are loaded
   */
  getTilesOk(): Observable<boolean> {
    return this.cerealesService.tilesOk;
  }
}
