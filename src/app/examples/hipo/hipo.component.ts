import { Component, OnInit } from '@angular/core';
import {Home} from '../../Clases/home';
import {DataService} from '../../Services/data.service';

@Component({
  selector: 'app-hipo',
  templateUrl: './hipo.component.html',
  styleUrls: ['./hipo.component.css']
})
export class HipoComponent implements OnInit {

  // @ts-ignore
  home: Home = new Home();

  constructor(private page: DataService) {
    this.home = this.page.getHipo('Hipo');
  }

  ngOnInit(): void {

  }

}
