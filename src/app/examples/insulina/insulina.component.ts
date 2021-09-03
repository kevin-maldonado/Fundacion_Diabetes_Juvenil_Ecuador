import {Component, OnInit} from '@angular/core';
import {Home} from '../../Clases/home';
import {DataService} from '../../Services/data.service';

@Component({
    selector: 'app-insulina',
    templateUrl: './insulina.component.html',
    styleUrls: ['./insulina.component.css']
})
export class InsulinaComponent implements OnInit {

    // @ts-ignore
    home: Home = new Home();

    constructor(private page: DataService) {
        this.home = this.page.getInsulina('Insulina');
    }

    ngOnInit(): void {
    }

}
