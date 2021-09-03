export class SubSecciones {
    id?: number;
    titulo: string;
    imagen?: Array<string>;
    contenido?: string;
    url?: string;


    constructor(id: number, titulo: string, imagen: Array<string>, contenido: string, url: string) {
        this.id = id;
        this.titulo = titulo;
        this.imagen = imagen;
        this.contenido = contenido;
        this.url = url;
    }
}


