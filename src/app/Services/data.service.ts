import {Injectable} from '@angular/core';
import {Home} from '../Clases/home';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";

@Injectable({
    providedIn: 'root'
})
export class DataService {
    // @ts-ignore
    home: Home = new Home();

    constructor(private http: HttpClient) {
    }

    guardarFormulario(primerRegistro: any) {
        return this.http.post(environment.servidor + 'primer-registro', primerRegistro)
    }

    getData(tipo) {
        // @ts-ignore
        this.home.id = 1;
        this.home.imagen = ['Banner.jpg', 'fotoprincipal.png', 'foto1.png', 'foto3.png', 'foto4.png', 'foto5.png', 'foto21.png']
        this.home.secciones = [{
            id: 1,
            titulo: 'Eventos',
            imagen: ['evento.JPG'],
            timeline: true,
            subseccion: [{
                id: 1,
                titulo: 'Noviembre 2019: Desayuno en familia',
                contenido: 'La Fundación Diabetes Juvenil Ecuador –FDJE- planificó un Desayuno en Familia para niños, jóvenes y padres que participan en los proyectos de la FDJE, el evento se desarrolló el día sábado 16 de noviembre en las instalaciones de la Unidad Educativa Letort y contó con la presencia de 200 participantes.\n' +
                    '\n' +
                    'Esta actividad se realiza en el marco de la Conmemoración del Día Mundial de la Diabetes, el 14 de noviembre, liderada por la Federación Internacional de Diabetes –IDF-, por sus siglas en inglés.'
            }, {
                id: 2,
                titulo: 'Noviembre 2019: Taller de DM1 a internos rotativos de medicina de la U. Central',
                contenido: 'Con ocasión del Día Mundial de la Diabetes nuestra líder juvenil Sarahí Dueñas, en coordinación con el equipo técnico de la FDJE realizó el "Taller Básico de DM1 para internos rotativos de Medicina de la Universidad Central del Ecuador".\n' +
                    '\n' +
                    'Esta actividad se realizó en el Auditorio de posgrado Rodrigo Yépez de la Facultada de Ciencias Médicas de la Universidad Central del Ecuador y contó con la asistencia de 100 estudiantes del último año de medicina.'
            }, {
                id: 3,
                titulo: 'Octubre 2019: Una voz unificada por la Diabetes en América Latina',
                contenido: 'Por invitación de la Asociación ALE I.A.P y la organización Pacientes de Corazón. A.C., nuestra representante de FDJE, Lucía Mantilla viajó a México a participar en el evento “Creando una voz unificada para la Diabetes en América Latina”, Mesa Redonda Regional sobre control y atención de la Diabetes, que tuvo lugar los días 16 y 17 de octubre, facilitada por Catalyst Consulting Group.'
            }]
        },
            {
                id: 2,
                titulo: 'Noticias',
                imagen: ['noticia.jpg'],
                timeline: true,
                subseccion: [{
                    id: 1,
                    titulo: 'Abril 2021: Primera Verion Pagina Web',
                    contenido: 'La Fundación Diabetes Juvenil Ecuador –FDJE- planificó un Desayuno en Familia para niños, jóvenes y padres que participan en los proyectos de la FDJE, el evento se desarrolló el día sábado 16 de noviembre en las instalaciones de la Unidad Educativa Letort y contó con la presencia de 200 participantes.\n' +
                        '\n' +
                        'Esta actividad se realiza en el marco de la Conmemoración del Día Mundial de la Diabetes, el 14 de noviembre, liderada por la Federación Internacional de Diabetes –IDF-, por sus siglas en inglés.',
                    url: ''
                }, {
                    id: 2,
                    titulo: 'Noviembre 2019: Taller de DM1 a internos rotativos de medicina de la U. Central',
                    contenido: 'Con ocasión del Día Mundial de la Diabetes nuestra líder juvenil Sarahí Dueñas, en coordinación con el equipo técnico de la FDJE realizó el "Taller Básico de DM1 para internos rotativos de Medicina de la Universidad Central del Ecuador".\n' +
                        '\n' +
                        'Esta actividad se realizó en el Auditorio de posgrado Rodrigo Yépez de la Facultada de Ciencias Médicas de la Universidad Central del Ecuador y contó con la asistencia de 100 estudiantes del último año de medicina.',
                    url: ''
                }, {
                    id: 3,
                    titulo: 'Octubre 2019: Una voz unificada por la Diabetes en América Latina',
                    contenido: 'Por invitación de la Asociación ALE I.A.P y la organización Pacientes de Corazón. A.C., nuestra representante de FDJE, Lucía Mantilla viajó a México a participar en el evento “Creando una voz unificada para la Diabetes en América Latina”, Mesa Redonda Regional sobre control y atención de la Diabetes, que tuvo lugar los días 16 y 17 de octubre, facilitada por Catalyst Consulting Group.',
                    url: ''
                }]
            },
            {
                id: 3,
                titulo: 'Proyectos Educativos',
                imagen: ['noticia.jpg'],
                timeline: false,
                subseccion: [{
                    id: 1,
                    titulo: 'Nuestra Fundación',
                    imagen: ['cae009.jpg'],
                    contenido: 'Somos una organización que contribuye a mejorar la calidad de vida de la comunidad con DM1, promoviendo la educación para pacientes y su entorno',
                    url: ''
                }, {
                    id: 2,
                    titulo: 'Jornadas Familiares',
                    imagen: ['lideres01.jpg'],
                    contenido: 'Es una propuesta lúdica orientada a motivar a los niños, adolescentes y jóvenes con DM1 a manejar su condición y tener mejor calidad de vida.',
                    url: ''
                }, {
                    id: 3,
                    titulo: 'Escuela de Líderes',
                    imagen: ['jornadas familiares (3).jpg'],
                    contenido: 'El equipo se desplaza hacia la comunidad con DM1 con el fin de reflexionar sobre temas que contribuyan a mejorar la calidad de vida de las personas.',
                    url: ''
                }]
            },
            {
                id: 3,
                titulo: 'Alianzas',
                imagen: ['noticia.jpg'],
                timeline: false,
                subseccion: [{
                    id: 1,
                    titulo: 'Vida para un niño',
                    imagen: ['LFAC_logo_black.png'],
                    url: 'https://lifeforachild.org'
                }, {
                    id: 2,
                    titulo: 'Federación Internacional de Diabetes',
                    imagen: ['idf-2.png'],
                    url: 'https://idf.org'
                }, {
                    id: 3,
                    titulo: 'Club Rotario de la Puntilla',
                    imagen: ['logo rotary-2.png'],
                    url: 'https://rotaryclubdelapuntilla.org/rotary/'
                }, {
                    id: 4,
                    titulo: 'Insulina para la vida',
                    imagen: ['descarga.png'],
                    url: 'https://www.insulinforlife.org'
                }]
            }
        ]

        return this.home;
    }

    getPage(tipo) {
        this.home.id = 1;
        this.home.imagen = [];
        this.home.secciones = [{
            id: 1,
            titulo: '¿Que es la diabetes?',
            imagen: ['diabetes-pizarra.png'],
            timeline: true,
            subseccion: [],
            contenido: 'La diabetes es un grupo de desórdenes caracterizado por una elevación constante de los niveles de glucosa\n' +
                'en sangre (NGS). La glucosa es la principal fuente de energía del cuerpo. La insulina, hormona producida por\n' +
                'las células beta en el páncreas, facilita el movimiento de la glucosa en el torrente sanguíneo hacia las células\n' +
                'para que pueda ser utilizada. La diabetes se presenta porque el cuerpo no produce suficiente insulina o\n' +
                'porque las células no responden a la insulina que es producida (resistencia a la insulina).',
        },
            {
                id: 2,
                titulo: 'El diagnóstico de diabetes se lleva a cabo cuando:',
                imagen: ['diabetes-fruta.png'],
                timeline: true,
                subseccion: [],
                contenido: '*Síntomas + glucosa casual ≥ 200 mg/dl\n' +
                    '*Glucosa en ayuno ≥126 mg/dl\n' +
                    '*Glucosa de 2 horas posterior a la comida ≥200 mg/dl durante una prueba de tolerancia oral a la glucosa (con 75 gramos de glucosa en bebida azucarada en ayuno)\n' +
                    '*En ausencia de síntomas claros, deberá realizarse nuevamente la prueba en un día distinto.\n' +
                    '*Si los recursos son limitados y no hay disponibilidad de análisis de glucosa en sangre podrá realizarse el diagnóstico con la medición de niveles de glucosa en orina y presencia cuerpos cetónicos.'
            },
            {
                id: 2,
                titulo: 'Sintomas y Signos',
                imagen: ['enfermedad.png'],
                timeline: true,
                subseccion: [{
                    id: 1,
                    titulo: 'Mas Comunes',
                    contenido: '*Pérdida de peso \n' +
                        '*Poliuria (orina frecuente) en niños más jóvenes es común que mojen la cama\n' +
                        '*Sed excesiva \n' +
                        '*Cansancio sin gana de jugar o trabajar \n' +
                        '\n'
                }, {
                    id: 2,
                    titulo: 'Menos Comunes',
                    contenido: '*Hambre excesiva \n' +
                        '*Visión borrosa \n' +
                        '*Cambios del estado de ánimo \n' +
                        '*Infecciones cutáneas \n' +
                        '*Infecciones vaginales y orales \n' +
                        '*Dolor abdominal \n' +
                        '\n'
                }, {
                    id: 3,
                    titulo: 'Severos (cetoacidósis diabética)',
                    contenido: '*Mejillas sonrojadas \n' +
                        '*Aliento con olor a cetonas (parecido a cidra de manzana)\n' +
                        '*Deshidratación con poliuria continua \n' +
                        '*Nivel disminuido de conciencia \n' +
                        '*Respiración de Kussmaul (profunda, rápida, suspirante)\n' +
                        '*Coma \n' +
                        '*Shock \n'
                }],
                contenido: ''
            },
        ]

        return this.home;
    }

    getDiabetes(tipo) {
        this.home.id = 1;
        this.home.imagen = [];
        this.home.secciones = [{
            id: 1,
            titulo: 'Diabetes y Enfermedad',
            imagen: ['enfermedad.png'],
            timeline: true,
            subseccion: [],
            contenido: 'Los niños y adolescentes cuya diabetes tiene un buen control metabólico no tienen más infecciones y enfermedades que los otros niños. Sin embargo cualquier enfermedad hace que el manejo de la diabetes sea más complicado y aumenta el riesgo de cetoacidosis o hipoglucemia.\n' +
                '\n' +
                'Existe evidencia que demuestra que una diabetes mal controlada, con un mal control metabólico, puede alterar el sistema inmune, aumentar la probabilidad de enfermar y prolongar la recuperación.\n' +
                '\n' +
                'En muchos lugares del mundo, el cuidado de la diabetes en niños y adolescentes es inadecuada debido a la falta de recursos, un deficiente sistema de salud, falta de especialistas en diabetes tipo 1, así como el costo elevado del tratamiento.',
        },
            {
                id: 2,
                titulo: 'Consejos importantes:',
                imagen: ['control.png'],
                timeline: true,
                subseccion: [{
                    id: 1,
                    titulo: '1. Monitoreo más frecuente',
                    imagen: ['control.png'],
                    contenido: '*Glucosa: Medir la glucosa más seguido durante la enfermedad permitirá un manejo óptimo. En el caso de monitoreo continuo se debe tener presente las tendencias de la glucosa. La glucosa sanguínea debe ser monitoreada al menos cada 3 a 4 horas, inclusive durante la noche y en algunas ocasiones cada 1 a 2 horas.\n' +
                        '\n' +
                        '*Cetonas: Son cuerpos producidos por el hígado como resultado del metabolismo de las grasas cuando no hay glucosa, ya sea por un consumo inadecuado o por la imposibilidad de utilizar glucosa debido a una deficiencia de insulina. Los cuerpos cetónicos pueden producirse cuando no hay glucosa debido al ayuno.'
                }, {
                    id: 2,
                    titulo: '2. Nunca dejar de usar insulina completamente',
                    imagen: ['insulina.png'],
                    contenido: 'La dosis de insulina puede necesitar ser aumentada o disminuida para mantener un adecuado metabolismo de la glucosa, pero nunca se la debe omitir. Un error muy común es pensar que porque el niño no está comiendo no debe usar insulina, esto aumenta el riesgo de una cetoacidosis.\n' +
                        '\n' +
                        'Aún en un estado de ayuno se necesita algo de insulina para las necesidades básicas del metabolismo, las que aumentarán durante una enfermedad aguda.'
                }, {
                    id: 3,
                    titulo: '3. Cuando hay vómito en niños o adolescentes con DM1 se debe considerar una carencia de insulina hasta que se pruebe lo contrario.',
                    imagen: ['niño-diabetes.png'],
                    contenido: 'Si existen episodios de hiperglucemia, cetoacidosis y vómito recurrentes, con o sin infección se debe pensar en que se está omitiendo la insulina, esto ocurre seguido en la adolescencia y representa un problema psicosocial.\n'
                }, {
                    id: 4,
                    titulo: '4. Mantener hidratación.',
                    imagen: ['hidratacion.png'],
                    contenido: 'Es esencial mantener la hidratación en cada niño con diabetes durante la enfermedad aguda; líquidos con o sin azúcar deben ser proporcionados de acuerdo a los niveles de azúcar en sangre. Considere la utilización de hidratación intravenosa en el caso que el niño no pueda tomar nada.\n' +
                        '\n' +
                        'Los líquidos para hidratar deben contener sal y agua no solo agua, especialmente si hay pérdida asociada a vómito y diarrea. Caldo de pollo, consomé, limonada hecha en casa con un poco de sal y azúcar son excelentes fuentes de agua y electrolitos.'
                }],
                contenido: ''
            },
        ]

        return this.home;
    }

    getTipoDiabetes(tipo) {
        this.home.id = 1;
        this.home.imagen = [];
        this.home.secciones = [{
            id: 1,
            titulo: 'Diabetes mellitus tipo 1',
            imagen: ['mellitus1.png'],
            timeline: true,
            subseccion: [],
            contenido: 'Es el tipo más común de diabetes en niños/as, adolescentes y jóvenes. Se trata de un desorden autoinmune, ' +
                'que ataca a las células productoras de insulina en el páncreas, por lo que no se produce insulina y hay ' +
                'presencia de anticuerpos, es decir la diabetes tipo 1 no puede ser prevenida.' +
                '\n' +
                '\n' +
                'Suele aparecer antes de los 35 años ' +
                '(ESTA DIABETES NO SE PRODUCE PORQUE LOS NIÑOS/AS COMAN MUCHOS DULCES O POR MALOS' +
                'HÁBITOS ALIMENTICIOS).\n' +
                '\n' +
                'Para determinar el riesgo de un individuo para desarrollar diabetes tipo 1 son importantes tanto factores ' +
                'genéticos como ambientales.\n' +
                '\n' +
                'El debut de la diabetes tipo 1 es inminente y los síntomas se presentan en poco tiempo. ' +
                '\n' +
                'La diabetes tipo 1 está aumentando entre 3 a 5% por año a nivel mundial.\n' +
                'El tratamiento de la diabetes tipo 1 consiste en: \n' +
                '\n' +
                '*Dependencia de por vida a la insulina con múltiples inyecciones por día (se usa dos tipos de insulina:\n' +
                'una basal y bolus).\n' +
                '\n' +
                '*Plan de alimentación saludable.\n' +
                '\n' +
                '*Actividad física regular.'
        }, {
            id: 2,
            titulo: 'Diabetes mellitus tipo 2',
            imagen: ['mellitus2.png'],
            timeline: true,
            subseccion: [],
            contenido: 'La diabetes tipo 2 por lo general afecta a personas mayores de 40 años, puede ser hereditaria y, a menudo, se relaciona con el sobrepeso. Esta diabetes sí puede prevenirse con buenos hábitos alimenticios,  ejercicio regular y manejo del stress. \n' +
                '\n' +
                'Las personas con diabetes tipo 2 producen insulina pero ésta no funciona adecuadamente (“resistencia a la insulina”). La diabetes tipo 2 a menudo responde inicialmente a un plan de alimentación saludable, ejercicio adecuado y a la reducción de peso. Sin embargo, con frecuencia es necesario el uso de metformina (+/- un sensibilizador a la insulina). Es posible que más adelante se requiera insulina.\n' +
                '\n' +
                'Su presencia ha incrementado en niños mayores, particularmente en adolescentes con sobrepeso y sedentarismo, con historial familiar de diabetes tipo 2 o en niños que tienen antecedentes étnicos particulares donde hay mayor prevalencia de diabetes tipo 2 en población adulta. \n' +
                '\n' +
                'El problema de la diabetes tipo 2 es que es una enfermedad silenciosa, muchas personas no saben que la tienen por tanto no actúa a tiempo, y se desarrollan complicaciones. \n',
        }, {
            id: 3,
            titulo: 'Diabetes Gestacional',
            imagen: ['gestacional.png'],
            timeline: true,
            subseccion: [],
            contenido: 'Aparece en mujeres embarazadas y puede desaparecer al término del mismo. Requiere control estricto, sino  hay riesgo de diabetes tipo 2 luego del parto.' +
                '\n' +
                '\n' +
                'Se suele tratar con medicamentos y ocasionalmente con insulina. El mayor riesgo que conlleva al tener este tipo de diabetes son parto de niños macrosómicos. \n',
        }, {
            id: 4,
            titulo: 'Diabetes LADA',
            imagen: ['lada.png'],
            timeline: true,
            subseccion: [],
            contenido: 'Es una variación de la diabetes Mellitus tipo 1 que comienza a edad adulta.' +
                '\n' +
                '\n' +
                'La persona produce insulina por muchos años, por lo tanto requiere dosis bajas de insulina. Este tipo de diabetes es causado por mecanismos autoinmunes. \n',
        }, {
            id: 5,
            titulo: 'Diabetes MODY',
            imagen: ['mody.png'],
            timeline: true,
            subseccion: [],
            contenido: 'Es un tipo de diabetes que se produce en los adultos jóvenes. Se presenta común aumento moderado de los niveles de glucosa en sangre. ' +
                '\n' +
                '\n' +
                'Regularmente se trata con dieta, medicamentos e insulina. Este tipo de diabetes tiene un origen genético. \n',
        }, {
            id: 6,
            titulo: 'Diabetes Neonatal',
            imagen: ['neonatal.png'],
            timeline: true,
            subseccion: [],
            contenido: 'Aparece en niños menores a 6 meses. Se puede tratar con insulina o solo con pastillas. Está relacionado con una familia con historial de diabetes, es resultado de la mutación de un gen. ' +
                '\n' +
                '\n' +
                'Para diagnosticarla se requiere de exámenes genéticos específicos. \n',
        }, {
            id: 7,
            titulo: 'Otros Tipos de Diabetes',
            imagen: ['neonatal.png'],
            timeline: true,
            subseccion: [],
            contenido: 'Entre otras están las conocidas como: \n' +
                '\n' +
                '*Diabetes atípica.\n' +
                '\n' +
                '*Diabetes monogénica.\n' +
                '\n' +
                '*Otras relacionadas con otros síndromes.\n',
        }]

        return this.home;
    }

    getHipo(tipo) {
        this.home.id = 1;
        this.home.imagen = [];
        this.home.secciones = [{
            id: 1,
            titulo: 'Hipoglucemia',
            imagen: ['hipoglucemia.png'],
            timeline: true,
            subseccion: [{
                id: 1,
                titulo: 'Causas:',
                imagen: [],
                contenido: '*Exceso de insulina o error en la sincronización de la insulina.\n' +
                    '*Cambios recientes en el esquema de insulina.\n' +
                    '*Consumo alimenticio insuficiente.\n' +
                    '*Enfermedad, (virus gastrointestinal).\n' +
                    '*Alcohol, (hígado ocupado en otra función).\n'
            }, {
                id: 2,
                titulo: 'Síntomas:',
                imagen: [],
                contenido: 'La persona con diabetes tipo 1 que experimenta una hipoglucemia puede presentar uno o varios de los siguientes síntomas: sudoración, palidez, temblor, taquicardia, hambre, ansiedad, náusea, debilidad, hormigueo, confusión, irritabilidad, mareo, dolor de cabeza, visión borrosa, convulsiones.'
            }, {
                id: 3,
                titulo: 'Tratamiento:',
                imagen: ['tratamiento1.png'],
                contenido: '*Siente a la persona y mida la glucosa.\n' +
                    '\n' +
                    '*Si la glucosa en sangre es menor a 70 mg/dl y no hay alteración de conciencia, realice el paso 3.\n' +
                    '\n' +
                    '*Administre 15 gramos de carbohidratos de acción rápida (1 cucharada de azúcar diluida en 1/2 vaso de agua, o 1/2 vaso de jugo de frutas).\n' +
                    '\n' +
                    '*Espere entre 10 y 15 minutos, y vuelva a medir la glucosa. Si la glucemia es mayor a 70 mg/dl brinde una porción de carbohidrato de acción lenta (4 galletas Maria, ó 2 galletas de coco, o una rebanada de pan)\n' +
                    '\n' +
                    '*Si al medir a la persona con diabetes tiene un valor menor a 70 mg/dl, tiene conciencia y puede tragar, repita el paso 3. Y espere 15 minutos más, repita este procedimiento hasta que su glucemia esté cercana a 100 mg/dl.'
            }],
            contenido: '',
        }]

        return this.home;
    }


    getHipoeHiper(tipo) {
        this.home.id = 1;
        this.home.imagen = [];
        this.home.secciones = [{
            id: 1,
            titulo: 'Hiperglucemia',
            imagen: ['hiperglucemia.png'],
            timeline: true,
            subseccion: [{
                id: 1,
                titulo: 'Causas:',
                imagen: [],
                contenido: '*Falta de insulina.\n' +
                    '*Insulina expuesta a temperaturas extremas.\n' +
                    '*Consumo alimenticio exagerado (muchos carbohidratos).\n' +
                    '*Enfermedad o infección\n'
            }, {
                id: 2,
                titulo: 'Síntomas:',
                imagen: [],
                contenido: 'La persona con diabetes puede presentar uno o varios de estos síntomas: orinar con frecuencia, demasiada sed, piel seca, hambre, visión borrosa, dolor de estómago, irritabilidad, náusea, vómito y somnolencia.'
            }, {
                id: 3,
                titulo: 'Tratamiento:',
                imagen: ['tratamiento2.png'],
                contenido: '*Mida la glucosa en sangre, no necesita repetir la prueba sino transcurridas al menos 2 horas.\n' +
                    '\n' +
                    '*Si el valor es mayor a 180 mg/dl inyectar insulina rápida de corrección, de acuerdo a la dosis indicada por su médico de la diabetes.\n' +
                    '\n' +
                    '*Tome 4 vasos de agua repartidos en una hora.\n' +
                    '\n' +
                    '*Si la glucosa se mantiene mayor a 200 mg/dl en varias pruebas por 2 días, contacte con su médico de la diabetes, pues hay riesgo de presentar cetoacidosis.\n'
            }],
            contenido: '',
        }]

        return this.home;
    }

    getGaleria(tipo) {
        this.home.id = 1;
        this.home.imagen = [];
        this.home.secciones = [
            {
                id: 1,
                titulo: 'Campo Amigo Ecuador',
                imagen: ['campo-amigo-cc1.png', 'campo-amigo-cc1-1.png', 'campo-amigo-cc1-2.png', 'campo-amigo-cc1-3.png', 'campo-amigo-cc1-4.png'],
                timeline: false,
                subseccion: [],
                contenido: '',
            }, {

                id: 2,
                titulo: 'Programa de Apadrinamiento',
                imagen: ['apadrinamiento2.jpg', 'apadrinamiento3.jpg', 'apadrinamiento4.jpg', 'apadrinamiento5.jpg'],
                timeline: false,
                subseccion: [],
                contenido: '',
            }, {
                id: 3,
                titulo: 'Ruta Recreativa',
                imagen: ['rutarecreativa39.jpg', 'rutarecreativa40.jpg', 'rutarecreativa41.jpg', 'rutarecreativa42.jpg', 'rutarecreativa43.jpg', 'rutarecreativa44.jpg'],
                timeline: false,
                subseccion: [],
                contenido: '',
            }, {
                id: 4,
                titulo: 'Escuela de formacion lideres juveniles',
                imagen: ['escuelalideres24.jpg', 'escuelalideres25.jpg', 'escuelalideres26.jpg', 'escuelalideres27.jpg', 'escuelalideres28.jpg'],
                timeline: false,
                subseccion: [],
                contenido: '',
            }, {
                id: 5,
                titulo: 'Encuentros de familias con DM1',
                imagen: ['encuentrofamilia31.jpg', 'encuentrofamilia32.jpg', 'encuentrofamilia33.jpg', 'encuentrofamilia34.jpg', 'encuentrofamilia35.jpg', 'encuentrofamilia36.jpg'],
                timeline: false,
                subseccion: [],
                contenido: '',
            }, {
                id: 6,
                titulo: 'Talleres charlas y conferencias',
                imagen: ['talleres18.jpg', 'talleres19.jpg', 'talleres20.jpg', 'talleres21.jpg', 'talleres22.jpg'],
                timeline: false,
                subseccion: [],
                contenido: '',
            }, {
                id: 7,
                titulo: 'Campaña de sensibilizacion sobre diabetes',
                imagen: ['campania51.jpg', 'campania72.jpg', 'campania73.jpg', 'campania74.jpg'],
                timeline: false,
                subseccion: [],
                contenido: '',
            }]

        return this.home;
    }

    getInsulina(tipo) {
        this.home.id = 1;
        this.home.imagen = [];
        this.home.secciones = [{
            id: 1,
            titulo: 'Uso de las insulinas Humanas y/o Análogas',
            imagen: ['terapia-insulina.png'],
            timeline: true,
            subseccion: [],
            contenido: 'Todos los niños con diabetes tipo 1 y algunos niños con otras formas de diabetes necesitan insulina. ' +
                '\n' +
                '\n' +
                'El objetivo es administrar la insulina de manera que los niveles de glucosa en sangre estén dentro del rango objetivo.',
        },
            {
                id: 2,
                titulo: 'Basal: (de acción lenta)',
                imagen: ['insulina-basal.png'],
                timeline: true,
                subseccion: [{
                    id: 1,
                    titulo: 'Determir',
                    imagen: [],
                    contenido: '*Inicio: 1-2 horas \n' +
                        '*Pico: 6-12 horas \n' +
                        '*Duracion: 12-18 horas \n'
                }, {
                    id: 2,
                    titulo: 'NPH',
                    imagen: [],
                    contenido: '*Inicio: 2-4 horas \n' +
                        '*Pico: 4-10 horas \n' +
                        '*Duracion: 14-16 horas \n'
                }, {
                    id: 3,
                    titulo: 'Lantus',
                    imagen: [],
                    contenido: '*Inicio: 30 min \n' +
                        '*Pico: plana \n' +
                        '*Duracion: 22-24 horas \n'
                }],
                contenido: '*Cubre las necesidades de base.\n' +
                    '\n' +
                    '*Debe estar presente las 24 horas del día.'
            },
            {
                id: 3,
                titulo: 'Bolo: (de acción rápida)',
                imagen: ['insulina-bolo.png'],
                timeline: true,
                subseccion: [{
                    id: 1,
                    titulo: 'Ultrarapida\n' +
                        'Humalog(Lispro)\n' +
                        'Novolog(Aspart)\n' +
                        'Apidra(Glulisina)',
                    imagen: [],
                    contenido: '*Inicio: 10 minutos \n' +
                        '*Pico: 1-3 horas \n' +
                        '*Duracion: 3-4 horas \n'
                }, {
                    id: 2,
                    titulo: 'Regular\n' +
                        'HumulinR, NovolinR',
                    imagen: [],
                    contenido: '*Inicio: 30-60 minutos \n' +
                        '*Pico: 2-4 horas \n' +
                        '*Duracion: 5-8 horas \n'
                }],
                contenido: '*Cubre alimentación: carbohidratos.\n' +
                    '\n' +
                    '*Corrección de hiperglucemias.'
            },

        ]

        return this.home;
    }

    getNutricion(tipo) {
        this.home.id = 1;
        this.home.imagen = [];
        this.home.secciones = [{
            id: 1,
            titulo: 'Alimentación Saludable',
            imagen: ['nutricion.png'],
            timeline: true,
            subseccion: [],
            contenido: 'La manera más fácil de saber cómo alimentarse saludablemente es seguir los consejos del plato saludable: la mitad del plato deben ser vegetales, de los cuales se aconseja que una parte estén cocinados y la otra estén crudos.\n' +
                '\n' +
                'Un cuarto de plato debe corresponder a la proteína (carne, pollo, pescado, mariscos o huevo). Y por último, el otro cuarto de plato debería tener carbohidratos (arroz, papa, yuca, verde, fideo, menestra o cereales). Se recomienda acompañar las comidas con agua pura y consumir la fruta en pieza como postre.'
        },
            {
                id: 2,
                titulo: '¿Cuántos carbohidratos comer al día?',
                imagen: ['carbohidratos.png'],
                timeline: true,
                subseccion: [],
                contenido: 'No existe una respuesta exacta, la dieta deberá ser individualizada y dependerá de la edad, estatura, peso y actividad física.\n' +
                    '\n' +
                    'De manera general, para una persona con una dieta de 2000 calorías diarias, se estima que podría consumir hasta 250 carbohidratos diarios, repartidos de la siguiente manera: máximo 70 gramos de carbohidratos en el desayuno, almuerzo y cena, más dos refrigerios o colaciones entre comidas de 15 a 30 gramos de carbohidratos.\n' +
                    '\n' +
                    'Se recomienda que una persona con diabetes tipo 1 diseñe su plan alimenticio con apoyo de un nutricionista, quien entre otras cosas evaluará la condición física, actividad diaria, disponibilidad y preferencias alimenticias. Cabe aclarar que esta publicación es tan solo una referencia.\n'
            },
            {
                id: 3,
                titulo: 'Lista de porciones y conteo de carbohidratos de alimentos Ecuatorianos',
                imagen: ['lista-porciones-1.png', 'lista-de-porciones-2.png'],
                timeline: true,
                subseccion: [],
                contenido: 'El método de contar carbohidratos cada vez es más popular en la comunidad con diabetes tipo 1. Existen diferentes razones por las cuales este método es tan aceptado así:\n' +
                    '\n' +
                    '*Permite alcanzar y mantener un mejor control en la glicemia sanguínea.\n' +
                    '\n' +
                    '*Se puede controlar mejor las glucemia post prandial. La cantidad y la fuente de los carbohidratos consumidos son los principales determinantes para mantener niveles constantes en las glicemias postprandiales.\n' +
                    '\n' +
                    'La Asociación de Diabetes Americana (ADA) sugiere que el método de contar carbohidratos puede ayudar a emparejar las dosis de insulina con el consumo de carbohidratos.' +
                    '\n' +
                    '\n' +
                    'Contar con una herramienta con el contenido de carbohidratos de frutas y alimentos locales, es muy valioso para ajustar con precisión la cantidad de insulina que debemos utilizar. La lista presentada a continuación, ha sido desarrollada por el área de educación en los diferentes talleres y cursos que ha brindado la Fundación de Diabetes Juvenil del Ecuador (FDJE) a lo largo de más de 10 años de trabajo.'
            }
        ]

        return this.home;
    }

    getEjercicios(tipo) {
        this.home.id = 1;
        this.home.imagen = [];
        this.home.secciones = [{
            id: 1,
            titulo: '¿Hacer deporte en casa? ¡Sí es posible!',
            imagen: ['trotar.gif'],
            timeline: true,
            subseccion: [],
            contenido: 'Les propongo una rutina de 30 minutos súper intensa y completa. Para esto necesitan el cronómetro de celular y listo! ¡Háganla tres veces por semana en días no consecutivos!\n' +
                '\n' +
                'Calentamiento de 10 minutos: 3 minutos de caminata intensa, 3 de trote en el mismo sitio, 2 minutos de elevar rodillas al pecho y 2 minutos de elevar talones a los glúteos.'
        }
        ]

        return this.home;
    }

    getPsicologia(tipo) {
        this.home.id = 1;
        this.home.imagen = [];
        this.home.secciones = [{
            id: 1,
            titulo: 'Psicología:¿Que hay en tú despensa?',
            imagen: ['psicologia1.png'],
            timeline: true,
            subseccion: [],
            contenido: 'Una metodología narrativa utilizada en Brasil explica cómo una familia se adapta a una enfermedad crónica y la llama un “visitante inesperado”, debido a que llega sin invitación y sin ser anunciad'
        }, {
            id: 2,
            titulo: '',
            imagen: ['psicologia2.png'],
            timeline: true,
            subseccion: [],
            contenido: 'En este caso, el visitante inesperado es la Diabetes Tipo 1 que trae consigo cambio, miedo, incertidumbre, angustia, inestabilidad y otros sentimientos.' +
                '\n' +
                '\n' +
                ' Además obliga a la familia a familiarizarse con endocrinología, hospital, insulina, hipoglicemia etc.'
        }, {
            id: 3,
            titulo: '',
            imagen: ['psicologia3.png'],
            timeline: true,
            subseccion: [],
            contenido: 'Todo aquello, desborda completamente a la familia y se encuentra en una posición que no sabe qué hacer ni cómo actuar. ' +
                '\n' +
                '\n' +
                'Cuando pensamos que un visitante llega a nuestra casa es normal imaginar que hay que brindarle algo de comida y por tanto, hay que ir a la despensa de la casa a ver qué ingredientes tenemos para prepararle algo.'
        }, {
            id: 4,
            titulo: '',
            imagen: ['psicologia4.png'],
            timeline: true,
            subseccion: [],
            contenido: 'La misma metodología narrativa, sugiere que la familia busque fortalezas para manejar la enfermedad y usa la metáfora de la “despensa de la vida”, que explica el lugar donde tenemos recursos varios que nos hacen resilientes. ' +
                '\n' +
                '\n' +
                'Ahí vamos a encontrar algunas cosas que nos van ayudar a sobrellevar la Diabetes Tipo 1 como: la familia, el humor, el amor, las amistades, etc.'
        }, {
            id: 5,
            titulo: '',
            imagen: ['psicologia5.png'],
            timeline: true,
            subseccion: [],
            contenido: 'Estos ingredientes se pueden utilizar, pero necesitamos más porque la Diabetes Tipo 1 nos desafía sobremanera. Toda la familia contribuye a la “despensa de la vida” con fortalezas y virtudes.'
        }, {
            id: 6,
            titulo: '',
            imagen: ['psicologia6.png'],
            timeline: true,
            subseccion: [],
            contenido: 'Con la ayuda de todos, aumentamos los ingredientes y podemos preparar a la Diabetes Tipo 1 un plato delicioso y vivimos en mayor calma a pesar de la presencia de la enfermedad crónica.'
        }, {
            id: 7,
            titulo: '',
            imagen: ['psicologia7.png'],
            timeline: true,
            subseccion: [],
            contenido: 'Sin embargo, pasa un tiempo y llega otro “visitante inesperado” llamado Coronavirus. Éste nos vuelve a desestabilizar y trae consigo conceptos como contagio, distanciamiento social, mascarilla, lavado de manos, cuarentena, aislamiento etc.'
        }, {
            id: 8,
            titulo: '',
            imagen: ['psicologia8.png'],
            timeline: true,
            subseccion: [],
            contenido: 'Esto nos vuelve a desbordar y no sabemos qué hacer porque ya tenemos en casa a la Diabetes Tipo 1 como invitado, pero debemos hacer pasar al Coronavirus también.'
        }, {
            id: 9,
            titulo: '',
            imagen: ['psicologia9.png'],
            timeline: true,
            subseccion: [],
            contenido: 'Hay que ofrecerle algo de comida al Coronavirus también, pero tenemos dos ventajas: este “visitante inesperado” no se va a quedar para siempre y nuestra “despensa de la vida” está más llena con recursos que llenamos con la llegada de la Diabetes Tipo 1.'
        }, {
            id: 10,
            titulo: '',
            imagen: ['psicologia10.png'],
            timeline: true,
            subseccion: [],
            contenido: 'Cuando abrimos nuestra despensa, nos damos cuenta que la Diabetes Tipo 1 nos ha proporcionado muchas fortalezas y virtudes como: madurez, aceptación, independencia, paciencia, motivación, calma, compromiso, autodisciplina, adaptación etc.' +
                '\n' +
                '\n' +
                'Todos estos podemos usar para hacerle frente al Coronavirus y prepararle algo rico de comer con los mismos ingredientes. Probablemente desarrollemos nuevas fortalezas a raíz de la pandemia para enfrentar otros desafíos a lo largo de nuestras vidas.'
        }, {
            id: 11,
            titulo: '',
            imagen: ['psicologia11.png'],
            timeline: true,
            subseccion: [],
            contenido: 'A nadie le gusta las crisis, pero afortunadamente ellas nos enseñan bastante y podemos usar lo que nos enseñó la Diabetes Tipo 1 para manejar la situación actual de la pandemia. ' +
                '\n' +
                '\n' +
                'Así, le preparamos un delicioso plato de comida al Coronavirus y nos mantenemos fuertes y tranquilos durante este tiempo difícil. ¿Qué tienes en tu despensa de la vida?'
        }
        ]

        return this.home;
    }

}
