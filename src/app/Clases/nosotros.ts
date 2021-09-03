import {Secciones} from './secciones';

export class Nosotros {
    id?: number;
    submenu?: Array<any>;
    secciones?: Array<Secciones>

    constructor(id: number, submenu: Array<any>, secciones: Array<Secciones>) {
        this.id = id;
        this.submenu = submenu;
        this.secciones = secciones;
    }
}
