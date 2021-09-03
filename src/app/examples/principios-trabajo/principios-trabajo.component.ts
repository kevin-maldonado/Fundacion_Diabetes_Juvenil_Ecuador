import {Component, OnInit} from '@angular/core';
import {Nosotros} from '../../Clases/nosotros';
import {NosotrosService} from '../../Services/nosotros.service';

@Component({
    selector: 'app-principios-trabajo',
    templateUrl: './principios-trabajo.component.html',
    styleUrls: ['./principios-trabajo.component.css']
})
export class PrincipiosTrabajoComponent implements OnInit {

    principiosTrabajo: Nosotros;

    constructor(private principiosTrabajoService: NosotrosService) {
        this.principiosTrabajo = principiosTrabajoService.getPrincipiosTrabajo('principiosTrabajo');
        console.log(this.principiosTrabajo);
    }

    ngOnInit(): void {
    }

    validarTexto(texto) {
        texto.split('\n').join('<br />');

        return texto;
    }
}
