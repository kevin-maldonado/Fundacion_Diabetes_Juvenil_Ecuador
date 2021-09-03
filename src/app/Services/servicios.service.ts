import {Injectable} from '@angular/core';
import {Servicios} from '../Clases/servicios';

@Injectable({
    providedIn: 'root'
})
export class ServiciosService {

    constructor() {
    }

    getData(tipo) {
        // @ts-ignore
        const servicios: Servicios = new Servicios();
        servicios.id = 1;
        servicios.secciones = [{
            id: 1,
            titulo: 'CONTEO DE CARBOHIDRATOS',
            timeline: false,
            subseccion: [{
                id: 1,
                titulo: 'NIVEL BÁSICO',
                imagen: ['nutricion1.jpg'],
                contenido: '*Información básica sobre nutrición.\n' +
                    '\n' +
                    ' *Requisitos nutricionales.\n' +
                    '\n' +
                    ' *Recomendaciones para una alimentación sana.\n' +
                    '\n' +
                    ' *Tomar decisiones alimentarias sanas.\n' +
                    '\n' +
                    ' *Formación para el autocontrol y uso de herramientas educativas.'
            }, {
                id: 2,
                titulo: 'NIVEL AVANZADO',
                imagen: ['nutricion3.jpg'],
                contenido: '*¿Cómo preparar un plan de comidas estructurado?.\n' +
                    '\n' +
                    ' *Conteo de carbohidratos.\n' +
                    '\n' +
                    ' *Sistema de intercambio de alimentos sana.\n' +
                    '\n' +
                    ' *Índice glucémico de los alimentos.\n' +
                    '\n' +
                    ' *¿Cómo actuar en situaciones especiales?\n' +
                    '\n' +
                    ' *Comidas fuera de casa.\n' +
                    '\n' +
                    ' *Complicaciones.'
            }]

        }, {
            id: 2,
            titulo: 'CONSEJERÍA INDIVIDUALIZADA',
            contenido: '*La FDJE cuenta con tres educadoras en diabetes que pueden orientar al paciente y su familia en el manejo cotidiano de su condición.\n' +
                '\n' +
                '*Se cuenta con un extenso material didáctico que permite un proceso de aprendizaje divertido y fácil.',
            imagen: ['educacion1.jpg', 'educacion2.jpg', 'educacion3.jpg', 'educacion4.jpg', 'educacion5.jpg']
        }]
        return servicios;

    }

    getInsumos(tipo) {
        // @ts-ignore
        const insumos: Servicios = new Servicios();
        insumos.id = 1;
        insumos.secciones = [{
            id: 1,
            titulo: 'CATÁLOGO DE INSUMOS',
            timeline: false,
            contenido: '*La FDJE no persigue lucro, y trata de que todas las personas con diabetes tengan acceso a los insumos necesarios para el tratamiento de la Diabetes.\n ' +
                '\n' +
                        '*Con la compra de insumos en la FDJE usted apoya para que niños de escaso recursos, tengan acceso a insumos y educación en diabetes.',
            subseccion: [{
                id: 1,
                titulo: 'ACCU CHECK ACTIVE',
                imagen: ['01promoactive.jpg'],
                contenido: '(PROMOCIÓN 200 TIRAS +EQUIPO)\n' +
                    '\n' +
                    '$102,00'
            }, {
                id: 2,
                titulo: 'ACCU CHECK ACTIVE',
                imagen: ['02active100.jpg'],
                contenido: '(100 TIRAS REACTIVAS)\n' +
                    '\n' +
                    '$53,00'
            }, {
                id: 3,
                titulo: 'ACCU CHECK ACTIVE',
                imagen: ['03active50.jpg'],
                contenido: '(50 TIRAS REACTIVAS)\n' +
                    '\n' +
                    '$28,00'
            }, {
                id: 4,
                titulo: 'ACCU CHECK PERFORMA',
                imagen: ['04promoperforma.jpg'],
                contenido: '(PROMOCIÓN 200 TIRAS +EQUIPO)\n' +
                    '\n' +
                    '$102,00'
            }, {
                id: 5,
                titulo: 'ACCU CHECK PERFORMA',
                imagen: ['05performa100.jpg'],
                contenido: '(100 TIRAS REACTIVAS)\n' +
                    '\n' +
                    '$53,00'
            }, {
                id: 6,
                titulo: 'ACCU CHECK PERFORMA',
                imagen: ['06performa50.jpg'],
                contenido: '(50 TIRAS REACTIVAS)\n' +
                    '\n' +
                    '$28,00'
            }, {
                id: 7,
                titulo: 'ACCU CHECK INSTANT',
                imagen: ['07promocióninstan.jpg'],
                contenido: '(PROMOCIÓN 200 TIRAS +EQUIPO)\n' +
                    '\n' +
                    '$102,00'
            }, {
                id: 8,
                titulo: 'ACCU CHECK INSTANT',
                imagen: ['08instant100.jpg'],
                contenido: '(100 TIRAS REACTIVAS)\n' +
                    '\n' +
                    '$53,00'
            }, {
                id: 9,
                titulo: 'ACCU CHECK INSTANT',
                imagen: ['09instan50.jpg'],
                contenido: '(50 TIRAS REACTIVAS)\n' +
                    '\n' +
                    '$28,00'
            }, {
                    id: 10,
                    titulo: 'TRUE TEST',
                    imagen: ['010promoción truetest.jpg'],
                    contenido: '(PROMOCIÓN 200 TIRAS +EQUIPO)\n' +
                        '\n' +
                        '$102,00'
                }, {
                    id: 11,
                    titulo: 'TRUE TEST',
                    imagen: ['011truetest100.jpg'],
                    contenido: '(100 TIRAS REACTIVAS)\n' +
                        '\n' +
                        '$53,00'
                }, {
                    id: 12,
                    titulo: 'TRUE TEST',
                    imagen: ['012truetest50.jpg'],
                    contenido: '(50 TIRAS REACTIVAS)\n' +
                        '\n' +
                        '$28,00'
                }, {
                    id: 13,
                    titulo: 'AGUJAS PARA PEN',
                    imagen: ['013caja agujas pen.jpg'],
                    contenido: '1 UNIDAD $0,25\n' +
                        '\n' +
                        'CAJA (100 UNIDADES) $25,00'
                }, {
                    id: 14,
                    titulo: 'LANCETAS SOFCLIX',
                    imagen: ['014lancetas sofclix accuchek.jpg'],
                    contenido: '1 UNIDAD $0,25\n' +
                        '\n' +
                        'CAJA (100 UNIDADES) $25,00'
                }, {
                    id: 15,
                    titulo: 'PROMO LANCETAS',
                    imagen: ['015promolancetas.jpg'],
                    contenido: '(50 UNIDADES + PUNZADOR)\n' +
                        '\n' +
                        '$5,00'
                }, {
                    id: 16,
                    titulo: 'LANCETAS PRESTIGE',
                    imagen: ['016lancetas PRESTIGE.jpg'],
                    contenido: 'CAJA (100 UNIDADES)\n' +
                        '\n' +
                        '$10,00'
                }, {
                    id: 17,
                    titulo: 'JERINGAS 30 CC',
                    imagen: ['017jeringas 30u..jpg'],
                    contenido: 'FUNDA (10 UNIDADES) $3,14\n' +
                        '\n' +
                        'CAJA (100 UNIDADES) $31,40'
                }, {
                    id: 18,
                    titulo: 'JERINGAS 50 CC',
                    imagen: ['018eringas 50u,.jpg'],
                    contenido: 'FUNDA (10 UNIDADES) $3,14\n' +
                        '\n' +
                        'CAJA (100 UNIDADES) $31,40'
                }, {
                    id: 19,
                    titulo: 'INSULINA HUMALOG',
                    imagen: ['019humalog.jpg'],
                    contenido: '(CARTUCHO 3ML)\n' +
                        '\n' +
                        '$11,50'
                }, {
                    id: 20,
                    titulo: 'INSULINA HUMALOG',
                    imagen: ['020humalogpen.jpg'],
                    contenido: '(PEN 3ML)\n' +
                        '\n' +
                        '$12,00'
                }, {
                    id: 21,
                    titulo: 'INSULINA APIDRA',
                    imagen: ['021insulina_apidra.jpg'],
                    contenido: '(PEN 3ML)\n' +
                        '\n' +
                        '$12,00'
                }, {
                    id: 22,
                    titulo: 'INSULINA NOVORAPID',
                    imagen: ['022insulina_novorapid.jpg'],
                    contenido: '(CARTUCHO 3ML)\n' +
                        '\n' +
                        '$8,50'
                }, {
                    id: 23,
                    titulo: 'INSULINA LANTUS',
                    imagen: ['023lantus _frasco10ml.jpg'],
                    contenido: '(FRASCO 10 ML)\n' +
                        '\n' +
                        '$38,00'
                }, {
                    id: 24,
                    titulo: 'INSULINA LANTUS',
                    imagen: ['024lantus_pen3ml.jpg'],
                    contenido: '(PEN 3 ML)\n' +
                        '\n' +
                        '$13,50'
                }, {
                    id: 25,
                    titulo: 'INSULINA TOUJEO',
                    imagen: ['025insulina_tougeo.jpg'],
                    contenido: '(PEN 3ML)\n' +
                        '\n' +
                        '$25,50'
                }, {
                    id: 26,
                    titulo: 'INSULINA BASAGLAR',
                    imagen: ['026insulina_basaglar.jpg'],
                    contenido: '(PEN 3ML)\n' +
                        '\n' +
                        '\n' +
                        '$13,50'
                }
            ]
        }]
        return insumos;

    }
}
