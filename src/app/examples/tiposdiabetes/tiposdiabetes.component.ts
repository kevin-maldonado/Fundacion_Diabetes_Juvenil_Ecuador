import { Component, OnInit } from '@angular/core';
import {Home} from '../../Clases/home';
import {DataService} from '../../Services/data.service';

@Component({
  selector: 'app-tiposdiabetes',
  templateUrl: './tiposdiabetes.component.html',
  styleUrls: ['./tiposdiabetes.component.css']
})
export class TiposdiabetesComponent implements OnInit {

  // @ts-ignore
  home: Home = new Home();

  constructor(private page: DataService) {
    this.home = this.page.getTipoDiabetes('TipoDiabetes');
  }

  ngOnInit(): void {

  }

}
