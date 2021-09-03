import {Component, OnInit} from '@angular/core';
import {Nosotros} from '../../Clases/nosotros';
import {NosotrosService} from '../../Services/nosotros.service';

@Component({
    selector: 'app-escuela',
    templateUrl: './escuela.component.html',
    styleUrls: ['./escuela.component.css']
})
export class EscuelaComponent implements OnInit {

    escuela: Nosotros;

    constructor(private escuelaService: NosotrosService) {
        this.escuela = escuelaService.getEscuela('escuela');
        console.log(this.escuela);
    }

    ngOnInit(): void {
    }

}
