import { Component } from '@angular/core';
import { MemoryLacteosService } from '../../services/memory_lacteos.service';



@Component({
  selector: 'app-game-info2',
  templateUrl: './game-info2.component.html',
  styleUrls: ['./game-info2.component.scss']
})
export class GameInfo2Component {
  /**
   * constructor method
   * @param lacteosService instance of the service that manage the game
   */
  constructor(
    public lacteosService: MemoryLacteosService,
  ) { }
}
