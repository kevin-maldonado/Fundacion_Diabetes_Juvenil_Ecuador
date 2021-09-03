import { Component, OnInit } from '@angular/core';
import {ModalDismissReasons, NgbModal} from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: 'app-recursos',
  templateUrl: './recursos.component.html',
  styleUrls: ['./recursos.component.css']
})
export class RecursosComponent implements OnInit {
  modalStyle = '';
  closeResult = '';

  constructor( private modalService: NgbModal) { }

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
