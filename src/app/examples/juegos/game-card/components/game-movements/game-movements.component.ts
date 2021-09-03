import { Component } from '@angular/core';
import { GameService } from 'app/examples/juegos/services/game.service';


@Component({
  selector: 'app-game-movements',
  templateUrl: './game-movements.component.html',
  styleUrls: ['./game-movements.component.scss'],
})
export class GameMovementsComponent {
  /**
   * constructor method
   * @param gameService  instance of the service that manage the game
   */
  constructor(
    public gameService: GameService,
  ) { }
}
