import { Component, OnInit } from '@angular/core';
import {Home} from '../../Clases/home';
import {DataService} from '../../Services/data.service';

@Component({
  selector: 'app-ejercicios',
  templateUrl: './ejercicios.component.html',
  styleUrls: ['./ejercicios.component.css']
})
export class EjerciciosComponent implements OnInit {
  // @ts-ignore
  home: Home = new Home();

  constructor(private page: DataService) {
    this.home = this.page.getEjercicios('Ejercicios');
  }
  ngOnInit(): void {
  }

}
