import {Component, OnInit} from '@angular/core';
import {DataService} from '../../Services/data.service';
import {Home} from '../../Clases/home';

@Component({
    selector: 'app-educacion',
    templateUrl: './educacion.component.html',
    styleUrls: ['./educacion.component.css']
})
export class EducacionComponent implements OnInit {
    // @ts-ignore
    home: Home = new Home();

    constructor(private page: DataService) {
        this.home = this.page.getPage('Educacion');
    }

    ngOnInit(): void {

    }

}
