import {Secciones} from './secciones';

export class Diabetes {
    id?: number;
    imagen?: Array<string>;
    secciones?: Array<Secciones>


    constructor(id: number, imagen: Array<string>, secciones: Array<Secciones>) {
        this.id = id;
        this.imagen = imagen;
        this.secciones = secciones;
    }
}
