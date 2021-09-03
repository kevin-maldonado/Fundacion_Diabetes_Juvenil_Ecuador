import { Component, OnInit } from '@angular/core';
import {Home} from '../../Clases/home';
import {DataService} from '../../Services/data.service';

@Component({
  selector: 'app-psicologia',
  templateUrl: './psicologia.component.html',
  styleUrls: ['./psicologia.component.css']
})
export class PsicologiaComponent implements OnInit {

  // @ts-ignore
  home: Home = new Home();

  constructor(private page: DataService) {
    this.home = this.page.getPsicologia('Psicologia');
  }
  ngOnInit(): void {
  }

}
