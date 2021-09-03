import {Component, OnInit} from '@angular/core';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {NgForm} from '@angular/forms';
import {ToastrService} from 'ngx-toastr';
import {ModalDialogService} from '../juegos/game-card/modal-dialog/modal-dialog.service';


@Component({
    selector: 'app-contactanos',
    templateUrl: './contactanos.component.html',
    styleUrls: ['./contactanos.component.css']
})
export class ContactanosComponent implements OnInit {
    closeResult = '';
    exito = false;


    constructor(private modalDialogService: ModalDialogService,
                private toastr: ToastrService, private http: HttpClient, private modal: NgbModal) {

    }

    ngOnInit(): void {
    }

    openLG(contenido) {
        this.modal.open(contenido, {size: 'Sm'});
    }

    onSubmit(contactForm: NgForm) {
        if (contactForm.valid) {
            const email = contactForm.value;
            const headers = new HttpHeaders({'Content-Type': 'application/json'});
            this.http.post('https://formspree.io/f/xjvjoyyk',
                {
                    name: 'NOMBRES: ' + email.nombres,
                    replyto: 'CORREO ELECTRONICO: ' + email.correo,
                    message: ['PROVINCIA: ' + email.ciudad,
                        'TELEFONO: ' + email.telefono, 'NECESIDAD: ' + email.necesidad]
                },
                {'headers': headers}).subscribe(
                response => {
                    this.success();
                    contactForm.reset();
                }
            );
        }
    }

    showSuccess() {
        this.modalDialogService.newDialog({
            title: 'finish-message.title',
            message: 'finish-message.win-game',
            clickOverlayCloses: true,
        });
        this.modalDialogService.openDialog();
    }

    success() {
        this.toastr.success('Mensaje Enviado!', 'Excelente');
    }
}
