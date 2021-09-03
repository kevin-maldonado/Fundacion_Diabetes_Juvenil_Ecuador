import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {User} from '../Clases/user';

@Injectable({
    providedIn: 'root'
})
export class AuthService {

    user: User;

    constructor(private http: HttpClient) {

    }

    login(data: any) {
        if (data.username && data.password) {
            if (data.username === 'alejo' && data.password === '12345') {
                data.rol = 'usuario';
                localStorage.setItem('user', JSON.stringify(data))
            }
            if (data.username === 'erick' && data.password === '12345') {
                data.rol = 'admin';
                localStorage.setItem('user', JSON.stringify(data))
            }
            return data;
        }
        return {};
    }

    getUser() {
        const user = localStorage.getItem('user');
        if (user !== null) {
            return JSON.parse(user);
        } else {
            this.user = new User(0, '', '', 'user');
            return this.user;
        }
    }
}
