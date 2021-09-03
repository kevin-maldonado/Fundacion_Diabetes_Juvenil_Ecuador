import { Component, OnInit } from '@angular/core';
import {Servicios} from '../../Clases/servicios';
import {ServiciosService} from '../../Services/servicios.service';

@Component({
  selector: 'app-insumos',
  templateUrl: './insumos.component.html',
  styleUrls: ['./insumos.component.css']
})
export class InsumosComponent implements OnInit {
  servicios: Servicios;

  constructor(private serviciosService: ServiciosService) {
    this.servicios = serviciosService.getInsumos('servicios');
    console.log(this.servicios);
  }

  ngOnInit(): void {
  }

}
