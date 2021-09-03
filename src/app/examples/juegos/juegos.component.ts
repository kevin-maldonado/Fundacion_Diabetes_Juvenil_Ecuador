import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Observable } from 'rxjs/Rx';

@Component({
  selector: 'app-juegos',
  templateUrl: './juegos.component.html',
  styleUrls: ['./juegos.component.css']
})
export class JuegosComponent implements OnInit {
  

  constructor(private modal:NgbModal) { }
  openXL(contenido){
    this.modal.open(contenido,{size:'xl'});
  }
  openXL1(contenido1){
    this.modal.open(contenido1,{size:'xl'});
  }
  openXL2(contenido2){
    this.modal.open(contenido2,{size:'xl'});
  }
  openXL3(contenido3){
    this.modal.open(contenido3,{size:'xl'});
  }
  openXL4(contenido4){
    this.modal.open(contenido4,{size:'xl'});
  }
  openXL5(contenido5){
    this.modal.open(contenido5,{size:'xl'});
  }
  
  openXL6(contenido6){
    this.modal.open(contenido6,{size:'xl'});
  }
  openXL7(contenido7){
    this.modal.open(contenido7,{size:'xl'});
  }
  

  ngOnInit() {
   
  }

  

}





