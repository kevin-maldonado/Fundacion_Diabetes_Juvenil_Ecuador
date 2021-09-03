import {Secciones} from './secciones';

export class Contactanos {
    id?: number;
    submenu?: Array<any>;
    secciones?: Array<Secciones>
    constructor(id: number,  secciones: Array<Secciones>) {
        this.id = id;
        this.secciones = secciones;
    }
}

