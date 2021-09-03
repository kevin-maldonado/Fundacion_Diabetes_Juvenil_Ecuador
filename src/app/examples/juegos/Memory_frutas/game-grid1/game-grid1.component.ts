import { Component, ChangeDetectionStrategy, ViewChild, Renderer2, ElementRef, AfterViewInit } from '@angular/core';

import { Observable } from 'rxjs';
import { MemoryFrutasService } from '../../services/memory_frutas.service';

import { TileImage1 } from '../interfaces1/tile-image1';

@Component({
  selector: 'app-game-grid1',
  templateUrl: './game-grid1.component.html',
  styleUrls: ['./game-grid1.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GameGrid1Component implements AfterViewInit {
  @ViewChild('gridContainer') gridContainer: ElementRef;

  /**
   * constructor method
   * @param memoryService instance of the service that manage the game
   * @param renderer instance of the angular renderer service
   */
  constructor(
    private memoryService: MemoryFrutasService,
    private renderer: Renderer2,
  ) { }

  /**
   * starts a subscription to control the tiles are loaded and it must start the cronometer
   */
  ngAfterViewInit(): void {
    this.memoryService.tilesOk.subscribe((value) => {
      if (value) {
        this.renderer.setStyle(this.gridContainer.nativeElement, 'height', 'auto');
        this.renderer.removeStyle(this.gridContainer.nativeElement, 'opacity');
        this.memoryService.startCronoGame();
      }
    });
  }

  /**
   * returns the tiles used in the game
   */
  getGameTiles(): Array<TileImage1> {
    return this.memoryService.tiles;
  }

  /**
   * returns the level selected by the user
   */
  getLevelClass(): string {
    return this.memoryService.levelName;
  }

  /**
   * returns if the tiles are loaded
   */
  getTilesOk(): Observable<boolean> {
    return this.memoryService.tilesOk;
  }
}
