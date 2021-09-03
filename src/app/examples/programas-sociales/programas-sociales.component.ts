import {Component, OnInit} from '@angular/core';
import {Nosotros} from 'app/Clases/nosotros';
import {NosotrosService} from 'app/Services/nosotros.service';
import {ModalDismissReasons, NgbModal} from "@ng-bootstrap/ng-bootstrap";

@Component({
    selector: 'app-programas-sociales',
    templateUrl: './programas-sociales.component.html',
    styleUrls: ['./programas-sociales.component.css']
})
export class ProgramasSocialesComponent implements OnInit {

    programas: Nosotros;
    modalStyle = '';
    closeResult = '';

    constructor(private programasService: NosotrosService, private modalService: NgbModal) {
        this.programas = programasService.getProgramas('programas');
        console.log(this.programas);
    }

    ngOnInit(): void {
    }
    open(content, url) {
        this.modalStyle = url;
        this.modalService.open(content, {backdropClass: 'light-blue-backdrop', size: 'lg', backdrop: 'static'}).result.then((result) => {
            this.closeResult = `Closed with: ${result}`;
        }, (reason) => {
            this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
        });
    }
    private getDismissReason(reason: any): string {
        if (reason === ModalDismissReasons.ESC) {
            return 'by pressing ESC';
        } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
            return 'by clicking on a backdrop';
        } else {
            return `with: ${reason}`;
        }
    }
}
