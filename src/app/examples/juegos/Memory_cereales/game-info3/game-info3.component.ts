import { Component } from '@angular/core';
import { MemoryCerealesService } from '../../services/memory_cereales.service';



@Component({
  selector: 'app-game-info3',
  templateUrl: './game-info3.component.html',
  styleUrls: ['./game-info3.component.scss']
})
export class GameInfo3Component {
  /**
   * constructor method
   * @param cerealesService instance of the service that manage the game
   */
  constructor(
    public cerealesService: MemoryCerealesService,
  ) { }
}
