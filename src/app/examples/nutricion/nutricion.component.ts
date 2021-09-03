import { Component, OnInit } from '@angular/core';
import {Home} from '../../Clases/home';
import {DataService} from '../../Services/data.service';

@Component({
  selector: 'app-nutricion',
  templateUrl: './nutricion.component.html',
  styleUrls: ['./nutricion.component.css']
})
export class NutricionComponent implements OnInit {

  // @ts-ignore
  home: Home = new Home();

  constructor(private page: DataService) {
    this.home = this.page.getNutricion('Nutricion');
  }
  ngOnInit(): void {
  }

}
