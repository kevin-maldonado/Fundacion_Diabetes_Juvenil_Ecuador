import { Component, ChangeDetectionStrategy, ViewChild, Renderer2, ElementRef, AfterViewInit } from '@angular/core';

import { Observable } from 'rxjs';
import { MemoryLacteosService } from '../../services/memory_lacteos.service';
import { TileImage2 } from '../interfaces2/tile-image2';


@Component({
  selector: 'app-game-grid2',
  templateUrl: './game-grid2.component.html',
  styleUrls: ['./game-grid2.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GameGrid2Component implements AfterViewInit {
  @ViewChild('gridContainer') gridContainer: ElementRef;

  /**
   * constructor method
   * @param lacteosService instance of the service that manage the game
   * @param renderer instance of the angular renderer service
   */
  constructor(
    private lacteosService: MemoryLacteosService,
    private renderer: Renderer2,
  ) { }

  /**
   * starts a subscription to control the tiles are loaded and it must start the cronometer
   */
  ngAfterViewInit(): void {
    this.lacteosService.tilesOk.subscribe((value) => {
      if (value) {
        this.renderer.setStyle(this.gridContainer.nativeElement, 'height', 'auto');
        this.renderer.removeStyle(this.gridContainer.nativeElement, 'opacity');
        this.lacteosService.startCronoGame();
      }
    });
  }

  /**
   * returns the tiles used in the game
   */
  getGameTiles(): Array<TileImage2> {
    return this.lacteosService.tiles;
  }

  /**
   * returns the level selected by the user
   */
  getLevelClass(): string {
    return this.lacteosService.levelName;
  }

  /**
   * returns if the tiles are loaded
   */
  getTilesOk(): Observable<boolean> {
    return this.lacteosService.tilesOk;
  }
}
