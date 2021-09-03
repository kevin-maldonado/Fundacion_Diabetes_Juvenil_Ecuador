import {Component, ElementRef, Inject, OnInit, Renderer2} from '@angular/core';
import {User} from '../Clases/user';
import {AuthService} from '../Services/auth.service';
import {Router} from '@angular/router';
import {DOCUMENT, Location} from '@angular/common';

@Component({
    selector: 'app-sidebar',
    templateUrl: './sidebar.component.html',
    styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

    private user: User;

    constructor(private auth: AuthService, private renderer: Renderer2, private router: Router, @Inject(DOCUMENT,) private document: any, private element: ElementRef, public location: Location) {
    }

    ngOnInit(): void {
    }

    getUser() {
        this.user = this.auth.getUser();
        return this.user;
    }

    removeSidebar() {
        let titlee = this.location.prepareExternalUrl(this.location.path());
        titlee = titlee.slice(1);
        if (titlee === 'admin/pages') {
            return true;
        } else {
            return false;
        }
    }
}
