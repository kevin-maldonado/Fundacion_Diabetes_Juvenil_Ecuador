import { Component, OnInit } from '@angular/core';
import {Nosotros} from '../../Clases/nosotros';
import {NosotrosService} from '../../Services/nosotros.service';

@Component({
  selector: 'app-mision',
  templateUrl: './mision.component.html',
  styleUrls: ['./mision.component.css']
})
export class MisionComponent implements OnInit {
  nosotros: Nosotros;

  constructor(private nosotrosService: NosotrosService) {
    this.nosotros = nosotrosService.getMision('mision');
    console.log(this.nosotros);
  }

  ngOnInit(): void {
  }

}
