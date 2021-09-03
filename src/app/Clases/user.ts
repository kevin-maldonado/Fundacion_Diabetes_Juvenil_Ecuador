export class User {
    id?: number;
    username?: string;
    password?: string;
    rol: string;

    constructor(id: number, username: string, password: string, rol: string) {
        this.id = id;
        this.username = username;
        this.password = password;
        this.rol = rol;
    }
}
