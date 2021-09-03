import {Component, OnInit} from '@angular/core';
import {Nosotros} from '../../Clases/nosotros';
import {NosotrosService} from '../../Services/nosotros.service';

@Component({
    selector: 'app-campo-amigo',
    templateUrl: './campo-amigo.component.html',
    styleUrls: ['./campo-amigo.component.css']
})
export class CampoAmigoComponent implements OnInit {

    campoAmigo: Nosotros;

    constructor(private campoAmigoService: NosotrosService) {
        this.campoAmigo = campoAmigoService.getCampoAmigo('campoAmigo');
        console.log(this.campoAmigo);
    }

    ngOnInit(): void {
    }

}
