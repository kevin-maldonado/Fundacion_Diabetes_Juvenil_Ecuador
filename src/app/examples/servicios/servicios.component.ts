import {Component, OnInit} from '@angular/core';
import {Servicios} from '../../Clases/servicios';
import {ServiciosService} from '../../Services/servicios.service';

@Component({
    selector: 'app-servicios',
    templateUrl: './servicios.component.html',
    styleUrls: ['./servicios.component.css']
})
export class ServiciosComponent implements OnInit {

    servicios: Servicios;

    constructor(private serviciosService: ServiciosService) {
        this.servicios = serviciosService.getData('servicios');
        console.log(this.servicios);
    }

    ngOnInit(): void {
    }


    validarTexto(texto) {
        texto.split('\n').join('<br />');

        return texto;
    }

}
