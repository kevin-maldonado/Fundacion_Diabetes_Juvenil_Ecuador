import {Component, OnInit} from '@angular/core';
import {Home} from '../../Clases/home';
import {DataService} from '../../Services/data.service';

@Component({
    selector: 'app-diabetes',
    templateUrl: './diabetes.component.html',
    styleUrls: ['./diabetes.component.css']
})
export class DiabetesComponent implements OnInit {

    // @ts-ignore
    home: Home = new Home();

    constructor(private page: DataService) {
        this.home = this.page.getDiabetes('Educacion');
    }

    ngOnInit(): void {

    }


}
