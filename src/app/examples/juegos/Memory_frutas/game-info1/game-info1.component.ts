import { Component } from '@angular/core';
import { MemoryFrutasService } from '../../services/memory_frutas.service';



@Component({
  selector: 'app-game-info1',
  templateUrl: './game-info1.component.html',
  styleUrls: ['./game-info1.component.scss']
})
export class GameInfo1Component {
  /**
   * constructor method
   * @param memoryService instance of the service that manage the game
   */
  constructor(
    public memoryService: MemoryFrutasService,
  ) { }
}
