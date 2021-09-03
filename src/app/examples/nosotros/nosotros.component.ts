import {Component, OnInit} from '@angular/core';

import {NosotrosService} from '../../Services/nosotros.service';
import {Nosotros} from '../../Clases/nosotros';


@Component({
    selector: 'app-nosotros',
    templateUrl: './nosotros.component.html',
    styleUrls: ['./nosotros.component.css']
})
export class NosotrosComponent implements OnInit {

    nosotros: Nosotros;

    constructor(private nosotrosService: NosotrosService) {


        this.nosotros = nosotrosService.getData('nosotros');
        console.log(this.nosotros);
    }

    ngOnInit(): void {
    }

}
