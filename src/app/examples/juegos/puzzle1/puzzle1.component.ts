// import { isNullOrUndefined } from 'util';
import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from "@angular/core";
import { Observable } from "rxjs/Rx";
import $ from "jquery";
import "jquery-ui/ui/widgets/sortable.js";
import "jquery-ui/ui/widgets/draggable.js";
import "jquery-ui/ui/widgets/droppable.js";
@Component({
  moduleId: module.id,
  selector: "app-puzzle1",
  templateUrl: "./puzzle1.component.html",
  styleUrls: ["./puzzle1.component.scss"],
})
export class Puzzle1Component implements OnInit {
  imageUrl: string = '../../../assets/images/logos-game/glucemico2.jpg';

  rompecabezas: any[] = [
    { id: 0, image: "imageonline1.jpg" },
    { id: 1, image: "imageonline2.jpg" },
    { id: 2, image: "imageonline3.jpg" },
    { id: 3, image: "imageonline4.jpg" },
    { id: 4, image: "imageonline5.jpg" },
    { id: 5, image: "imageonline6.jpg" },
    { id: 6, image: "imageonline7.jpg" },
    { id: 7, image: "imageonline8.jpg" },
    { id: 8, image: "imageonline9.jpg" },
  ];

  count = 0;
  state = [];
  win = false;

  constructor() {}

  ngOnInit() {
    this.onStart();
  }

  onStart() {
    this.rompecabezas.sort(function () {
      return 0.5 - Math.random();
    });
    this.state = [];
    this.win = false;
    this.rompecabezas.forEach((x) => {
      this.state.push(x.id);
    });
  }

  ngAfterViewInit() {
    $(".draggable").draggable({ snap: ".grid" });

    const self = this;
    let z = 1;

    $(".droppable").droppable({
      drop: function (event, ui) {
        self.state[event.target.id] = event.originalEvent.target.id;
        self.count++;

        let ok = true;

        for (let i = 0; i < self.state.length; i++) {
          if (self.state[i] != i) {
            ok = false;
            break;
          }
        }

        self.win = ok;
      },
    });

    $(".draggable").draggable({
      start: function (e) {
        $(this).css("z-index", z++);
      },
      drag: function (e) {},
      stop: function (e) {},
    });
  }
}
