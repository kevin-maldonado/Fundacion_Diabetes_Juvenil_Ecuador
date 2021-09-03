import {fromArray} from 'rxjs-compat/observable/fromArray';
import {Secciones} from './secciones';

export class Home {
    id?: number;
    nombre?: string;
    imagen?: Array<string>;
    secciones?: Array<Secciones>

    constructor(id: number, imagen: Array<string>, secciones: Array<Secciones>) {
        this.id = id;
        this.imagen = imagen;
        this.secciones = secciones;
    }
}
