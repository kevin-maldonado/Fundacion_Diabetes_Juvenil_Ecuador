import {Component, OnInit, Renderer2} from '@angular/core';
import {NgbDateStruct} from '@ng-bootstrap/ng-bootstrap';
import {Home} from '../Clases/home';
import {DataService} from '../Services/data.service';
import {FormEvents} from "../Clases/form";
import {ToastrService} from "ngx-toastr";

@Component({
    selector: 'app-components',
    templateUrl: './components.component.html',
    styleUrls: ['./components.component.scss']
})

export class ComponentsComponent implements OnInit {

    home: Home;
    page = 4;
    principal;
    formulario: FormEvents = new FormEvents();
    focus;
    date: { year: number, month: number };

    constructor(private toastr: ToastrService, private renderer: Renderer2, private data: DataService) {
        this.home = data.getData('home');

    }

    ngOnInit() {

    }

    sendData() {
        console.log(this.formulario)
        this.data.guardarFormulario(this.formulario).subscribe(res => {
            this.success();
            this.formulario = new FormEvents();
        }, err => {

            this.error();
        })
    }


    success() {
        this.toastr.success('Mensaje Enviado!', 'Excelente');
    }


    error() {
        this.toastr.error('Algo ha salido mal!', 'OPPSS!!');
    }
}
