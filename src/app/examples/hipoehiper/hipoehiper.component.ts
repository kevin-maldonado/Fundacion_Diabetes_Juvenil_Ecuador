import { Component, OnInit } from '@angular/core';
import {Home} from '../../Clases/home';
import {DataService} from '../../Services/data.service';

@Component({
  selector: 'app-hipoehiper',
  templateUrl: './hipoehiper.component.html',
  styleUrls: ['./hipoehiper.component.css']
})
export class HipoehiperComponent implements OnInit {

  // @ts-ignore
  home: Home = new Home();

  constructor(private page: DataService) {
    this.home = this.page.getHipoeHiper('HipoHiper');
  }

  ngOnInit(): void {

  }

}
