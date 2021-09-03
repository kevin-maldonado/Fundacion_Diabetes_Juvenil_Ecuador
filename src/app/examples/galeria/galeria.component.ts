import {Component, OnInit} from '@angular/core';
import {Home} from '../../Clases/home';
import {DataService} from '../../Services/data.service';
import {ModalDismissReasons, NgbModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
    selector: 'app-galeria',
    templateUrl: './galeria.component.html',
    styleUrls: ['./galeria.component.scss'],
    styles: [`
        .light-blue-backdrop {
            background-color: #5cb3fd;
        }
    `]
})
export class GaleriaComponent implements OnInit {

    // @ts-ignore
    home: Home = new Home();
    modalStyle = '';
    closeResult = '';


    constructor(private page: DataService, private modalService: NgbModal) {
        this.home = this.page.getGaleria('Galeria');
    }


    ngOnInit(): void {
    }

    openimg(url) {

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
