import {Component, OnInit} from '@angular/core';
import {AuthService} from '../../Services/auth.service';
import {Route, Router} from '@angular/router';

@Component({
    selector: 'app-signup',
    templateUrl: './signup.component.html',
    styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
    test: Date = new Date();
    base = 'login-image.jpg'
    focus;
    principal = `background-image: url('assets/img/${this.base}')`;
    focus1;
    data: any = {
        username: '',
        password: ''
    }

    constructor(private auth: AuthService, private route: Router) {
    }

    ngOnInit() {
    }

    login() {

        const user = this.auth.login(this.data);
        if (user) {
            if (user.rol === 'admin') {
                this.route.navigate(['admin']);
            } else {
                this.route.navigate(['home']);
            }

        } else {
            //error
        }

    }
}
