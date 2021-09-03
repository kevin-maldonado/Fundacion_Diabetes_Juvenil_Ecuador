import { Component } from '@angular/core';
import { MemoryCerealesService } from 'app/examples/juegos/services/memory_cereales.service';

@Component({
  selector: 'app-game-movements3',
  templateUrl: './game-movements3.component.html',
  styleUrls: ['./game-movements3.component.scss'],
})
export class GameMovements3Component {
  /**
   * constructor method
   * @param cerealesService  instance of the service that manage the game
   */
  constructor(
    public cerealesService:MemoryCerealesService ,
  ) { }
}
