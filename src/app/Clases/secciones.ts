import {SubSecciones} from './sub-secciones';

export class Secciones {
    id?: number;
    titulo?: string;
    imagen?: Array<string>;
    timeline?: boolean;
    contenido?: string;
    subseccion?: Array<SubSecciones>


    constructor(id: number, titulo: string, imagen: Array<string>,
                timeline: boolean, subseccion: Array<SubSecciones>, contenido: string) {
        this.id = id;
        this.titulo = titulo;
        this.imagen = imagen;
        this.timeline = timeline;
        this.subseccion = subseccion;
        this.contenido = contenido;
    }
}
