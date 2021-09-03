import { Component } from '@angular/core';
import { MemoryFrutasService } from 'app/examples/juegos/services/memory_frutas.service';


@Component({
  selector: 'app-game-movements1',
  templateUrl: './game-movements1.component.html',
  styleUrls: ['./game-movements1.component.scss'],
})
export class GameMovements1Component {
  /**
   * constructor method
   * @param memoryService  instance of the service that manage the game
   */
  constructor(
    public memoryService:MemoryFrutasService ,
  ) { }
}
