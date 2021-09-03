import { Component } from '@angular/core';
import { MemoryLacteosService } from 'app/examples/juegos/services/memory_lacteos.service';

@Component({
  selector: 'app-game-movements2',
  templateUrl: './game-movements2.component.html',
  styleUrls: ['./game-movements2.component.scss'],
})
export class GameMovements2Component {
  /**
   * constructor method
   * @param lacteosService  instance of the service that manage the game
   */
  constructor(
    public lacteosService:MemoryLacteosService ,
  ) { }
}
