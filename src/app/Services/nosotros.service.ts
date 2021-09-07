import {Injectable} from '@angular/core';
import {Nosotros} from '../Clases/nosotros';

@Injectable({
    providedIn: 'root'
})
export class NosotrosService {

    constructor() {
    }

    getData(tipo) {
        // @ts-ignore
        const nosotros = new Nosotros();
        nosotros.id = 1;
        nosotros.secciones = [{
            id: 1,
            titulo: 'HISTORIA',
            imagen: ['Historia5.JPG'],
            timeline: true,
            subseccion: [],
            contenido: 'Pro Fundación Diabetes Juvenil del Ecuador nace en el año 2003, con la misión de mejorar la' +
                'calidad de vida de los niños, niñas y jóvenes con Diabetes Mellitus tipo 1 (DM1), en la ciudad de ' +
                'Quito. El impulso de esta fundación fue apoyar a las necesidades de las familias con niños con ' +
                'DM1, pues en el país no existían ni conocimientos ni centros de educación y enseñanza para un ' +
                'manejo adecuado de esta patología. Se produjeron varias reuniones entre familias que contaban ' +
                'con miembros con DM1, en estos espacios se establecieron con la finalidad de apoyar con ' +
                'insumos a quienes más lo necesitaban.\n' +
                '\n' +
                'Esta primera actividad permitió identificar muchas necesidades sobre nuestros familiares con ' +
                'Diabetes Mellitus 1 y nos permitió pensar más allá de nuestros hogares e intereses inmediatos y ' +
                'pensar en los demás personas con esta enfermedad, quienes conviven y comparten similares ' +
                'experiencias con la DM1.\n' +
                '\n' +
                'En el año 2005 la fundación alcanza su reconocimiento como jurídico como organización sin fines ' +
                'de lucro, con el nombre de Fundación Diabetes Juvenil del Ecuador (FDJE), iniciando así un ' +
                'compromiso más claro y firme con esta realidad. Desde nuestro nacimiento, nuestro compromiso ' +
                'ha sido y es trabajar por las personas con DM1 en el Ecuador para apoyar su bienestar, contribuir a ' +
                'mejorar su calidad de vida a través de la Educación en DM1 y hacer un acompañamiento a las ' +
                'personas y familias.'
        }
        ]
        return nosotros;
    }
getMision(tipo) {
        // @ts-ignore
    const mision = new Nosotros();
    mision.id = 1;
    mision.secciones = [{
        id: 2,
        titulo: 'MISIÓN',
        imagen: ['Historia6.JPG'],
        timeline: true,
        subseccion: [],
        contenido: 'Contribuir a mejorar la calidad de vida de la comunidad con Diabetes Mellitus tipo 1 del Ecuador ' +
            'promover la educación para pacientes y su entorno, visibilizar sus necesidades e impulsar el respeto a sus derechos.'
    },
        {
            id: 3,
            titulo: 'VISIÓN',
            imagen: ['Historia7.JPG'],
            timeline: true,
            subseccion: [],
            contenido: 'Ser una organización técnica y humanitaria, referente de la DM1 en el Ecuador por su enfoque ' +
                'educativo, la información y propuesta de vida, a la que puedan acudir personas e instituciones ' +
                'públicas y privadas para capacitarse, apoyar y colaborar en el trabajo a favor de la comunidad con DM1.'

        },
        {
            id: 4,
            titulo: 'OBJETIVOS INSTITUCIONALES',
            imagen: ['Historia8.JPG', 'Historia9.jpg' , 'Historia10.jpg' , 'Historia11.jpg'],
            timeline: true,
            subseccion: [],
            contenido: '*Proporcionar educación a las personas con DM1, su familia y entorno respecto del manejo de su condición crónica.\n' +
                '\n' +
                '*Gestionar y facilitar las condiciones de acceso a la atención, seguimiento médico e insumos de las\n' +
                'personas con diabetes mellitus tipo 1.\n' +
                '\n' +
                '*Fomentar una actitud positiva de las personas con DM1, su familia y el entorno.\n' +
                '\n' +
                '*Formar a jóvenes voluntarios como líderes juveniles “gestores de vida”.\n' +
                '\n' +
                '*Investigar sobre la situación de las personas con diabetes mellitus tipo 1 en Ecuador.\n' +
                '\n' +
                '*Incidir en la adopción de políticas públicas de protección a las personas con DM1.\n' +
                '\n' +
                'La FDJE se concentra y especializa en brindar educación diabetológica, nutricional, consejería y ' +
                'apoyo de pares a las personas con diabetes tipo 1, sus padres o cuidadores y entorno escolar; ya ' +
                'que en Ecuador el tiempo de consulta médica no incorpora tiempo de educación, siendo éste un ' +
                'pilar fundamental para tener un manejo adecuado de esta condición crónica, lo cual garantiza la ' +
                'adherencia al tratamiento.\n' +
                'En forma presencial la FDJE ha desarrollado proyectos educativos y programas sociales como:\n' +
                '\n' +
                '*Campamento Campo Amigo Ecuador.\n' +
                '\n' +
                '*Encuentros de Familias DM1.\n' +
                '\n' +
                '*Talleres de conteo de carbohidratos.\n' +
                '\n' +
                '*Charlas y conferencias especializadas.\n' +
                '\n' +
                '*Sesiones Educativas para Familias debutantes.\n' +
                '\n' +
                '*Escuela de Formación de Líderes Juveniles y Ruta Recreativa con la Familia FDJE.\n' +
                '\n' +
                '*Programa de Apadrinamiento.\n' +
                '\n' +
                'En el periodo de pandemia desarrolla proyectos virtuales para acercar la educación diabetológica y ' +
                'nutricional, y el acompañamiento a todas las familias de forma segura.\n' +
                '\n' +
                '*Campo Amigo Conectado Contigo.\n' +
                '\n' +
                '*Webinarios de educación.\n' +
                '\n' +
                '*Conversemos con los expertos, charlas virtuales.\n' +
                '\n' +
                '*Acompañamiento psicológico.\n' +
                '\n' +
                '*Adolescencia sin dudas, acompañamiento emocional.\n' +
                '\n' +
                '*Cuenta cuentos, talleres para niños y niñas.\n' +
                '\n' +
                '*Conteo de carbohidratos con Recetas caseras.\n' +
                '\n' +
                '*Escuela virtual de Líderes juveniles.\n' +
                '\n' +
                '*Educación a familias debutantes.\n' +
                '\n' +
                'Tanto la educación presencial como virtual se hacen con una metodología constructivista en ' +
                'donde se intenta que los asistentes tengan una participación activa en la consecución del ' +
                'conocimiento, a través de la reflexión, el diálogo y el juego, teniendo en cuenta las características ' +
                'culturales de cada grupo con el que se trabaja. Así también, los contenidos se adaptan ' +
                'culturalmente a la realidad de los diversos públicos, acompañado de un extenso material didáctico ' +
                'y práctico.'
        }
    ]
    return mision;
    }

    getPrincipiosTrabajo(tipo) {
        // @ts-ignore
        const principiosTrabajo = new Nosotros();
        principiosTrabajo.id = 1;
        principiosTrabajo.secciones = [{
            id: 1,
            titulo: 'PRINCIPIOS DE TRABAJO',
            imagen:  ['PT1.JPG', 'PT2.jpg'],
            timeline: false,
            subseccion: [],
            contenido: 'Principios generales de la FDJE para la intervención en proyectos sociales\n' +
                'La FDJE incorpora principios comunes en el marco jurídico que establece la Constitución del Ecuador.\n' +
                '\n' +
                '*Equidad de género: La FDJE se esfuerza por eliminar concepciones sexistas e impulsa la equidad y respeto en las relaciones de género.\n' +
                '\n' +
                '*Participación: La FDJE considera importante la participación social en la búsqueda por ' +
                'mejorar la calidad de vida de las personas con DM1 y de la sociedad en general. En la ' +
                'forma de intervención institucional incorpora al paciente, la familia, la escuela, el entorno, ' +
                'a los profesionales de la salud y a las autoridades.\n' +
                '\n' +
                '*Interculturalidad: La FDJE se esfuerza por adaptar la propuesta educativa a las ' +
                'características culturales y necesidades específicas de cada grupo con el que se trabaja, ' +
                'promueve el respeto entre culturas.\n' +
                '\n' +
                '*Corresponsabilidad: La FDJE promueve la corresponsabilidad de la familia en el manejo, ' +
                'seguimiento cotidiano de la DM1, del Estado como garante de los derechos de los niños, ' +
                'adolescentes y jóvenes, y de la sociedad civil en general.\n' +
                '\n' +
                '*Transparencia y rendición de cuentas: La FDJE transparenta el uso de recursos y rinde cuentas de las acciones y los proyectos.\n'
        },
            {
                id: 2,
                titulo: 'PRINCIPIOS APLICADOS EN LOS PROYECTOS EDUCATIVOS',
                imagen: ['PT3.JPG', 'PT5.jpg'],
                timeline: false,
                subseccion: [],
                contenido: '*Partimos de la gente en la que nos reconocemos, sentimos empatía y compartimos.\n' +
                    '\n' +
                    '*El espacio de capacitación es ante todo el lugar donde se hacen amigos y amigas.\n' +
                    '\n' +
                    '*Promovemos la comunicación e interacción entre todos los participantes.\n' +
                    '\n' +
                    '*Promovemos la importancia del respeto entre las personas.\n' +
                    '\n' +
                    '*El principal método es el diálogo, adaptado a cada contexto y a cada individuo, en el que todos participen de una manera activo.\n'
            }]
        return principiosTrabajo;
    }

    getCampoAmigo(tipo) {
        // @ts-ignore
        const campoAmigo = new Nosotros();
        campoAmigo.id = 1;
        campoAmigo.secciones = [{
            titulo: 'PROYECTOS Y ACTIVIDADES EDUCATIVAS',
            timeline: false,
            subseccion: [{
                id: 1,
                titulo: 'Campamento Campo Amigo Ecuador',
                contenido: 'Se realiza una vez al año, y es la actividad más esperada, es ' +
                    'un lugar de encuentro entre niños, niñas, adolescentes y jóvenes que comparten la misma ' +
                    'condición de vida, donde conviven por varios días, intercambian inquietudes y aprendizaje en un ' +
                    'lugar cómodo, seguro y sobre todo lleno de alegría.\n' +
                    '\n' +
                    'Las niñas, niños y jóvenes reciben educación adaptada según su edad, con profesionales ' +
                    'nacionales y extranjeros que los orientan para el mejor auto cuidado de la DM1, así también ' +
                    'comparten espacios de creatividad con artes plásticas, realizan actividades deportivas y lúdicas, y ' +
                    'se complementan con actividades nocturnas donde hay mucha diversión.\n' +
                    '\n' +
                    'Es importante resaltar la hermandad, camaradería, amistad y respeto que existe entre los ' +
                    'campistas, líderes juveniles, profesionales y todo el equipo de la FDJE, sin duda es un lugar donde ' +
                    'el cariño se expresa totalmente. Tiene modalidades presencial y virtual.',
                imagen: ['CAE (2).jpg', 'cae003.jpg']
            },
                {
                    id: 1,
                    titulo: 'Encuentros de Familias DM1',
                    contenido: 'Es un proyecto presencial que corresponde a la segunda fase de las ' +
                        'Jornadas Familiares, con el objetivo de educar, socializar y capacitar in situ a la niñez, adolescencia ' +
                        'y jóvenes con DM1, sus padres o cuidadores donde aprenden de diabetes, comparten sus ' +
                        'experiencias y reflexionan sobre temas que contribuyan a mejorar su calidad de vida. ' +
                        '\n' +
                        '\n' +
                        'Este proyecto tiene diferente capítulos porque se realiza en distintas regiones del país, con la ' +
                        'participación de profesionales de la Salud, líderes juveniles, voluntarios nacionales y Equipo de ' +
                        'FDJE.',
                    imagen: ['cae014.jpg', 'CAAE.jpg']
                },
                {
                    id: 2,
                    titulo: 'Taller de conteo de carbohidratos ',
                    contenido: 'La FDJE es una pionera en el Ecuador en la difusión de esta ' +
                        'herramienta útil a las personas con diabetes para planificar sus alimentos y controlar de manera ' +
                        'efectiva su glucosa. Existen talleres de nivel básico y avanzado. Modalidad presencial. ',
                    imagen: ['cae014.jpg', 'CAAE.jpg']
                },
                {
                    id: 3,
                    titulo: 'Charlas y conferencias especializadas ',
                    contenido: 'Se trata de eventos educativos específicos que la FDJE ' +
                        'realiza con distintos públicos de la comunidad con DM1: padres o cuidadores, profesionales de la ' +
                        'salud, profesores y/o alumnos de escuelas y colegios y público en general. Modalidad presencial. ',
                    imagen: ['cae014.jpg', 'CAAE.jpg']
                },
                {
                    id: 4,
                    titulo: 'Sesiones Educativas para Familias debutantes ',
                    contenido: 'Se trata de un programa de educación inicial ' +
                        'gratuito en diabetes y nutrición que prepara a las familias con un diagnóstico reciente para ' +
                        'empezar a tomar el control de esta enfermedad. Tiene modalidades presencial y virtual.',
                    imagen: ['cae014.jpg', 'CAAE.jpg']
                },
                {
                    id: 5,
                    titulo: 'Webinarios de educación',
                    contenido: 'Encuentros virtuales con profesionales de la salud que desarrollan un ' +
                        'tema específico.',
                    imagen: ['cae014.jpg', 'CAAE.jpg']
                },
                {
                    id: 6,
                    titulo: 'Conversemos con los expertos',
                    contenido: 'Se trata de un ciclo de charlas virtuales con profesionales de la ' +
                        'salud orientadas a los padres de las personas con diabetes tipo 1 recién diagnosticadas. Los temas ' +
                        'que se tratan intentas contribuir a un adecuado proceso de capacitación de las familias ' +
                        'debutantes. Modalidad virtual.',
                    imagen: ['cae014.jpg', 'CAAE.jpg']
                },
                {
                    id: 7,
                    titulo: 'Acompañamiento psicológico',
                    contenido: 'Se proponen talleres, herramientas y estrategias a las familias, ' +
                        'particularmente a los padres o cuidadores que faciliten llevar buena calidad de la vida con ' +
                        'diabetes tipo 1. Modalidad virtual.',
                    imagen: ['cae014.jpg', 'CAAE.jpg']
                },
                {
                    id: 8,
                    titulo: 'Adolescencia sin dudas:',
                    contenido: 'Es una propuesta de acompañamiento emocional y espacios de confianza ' +
                        'dirigidos exclusivamente a los adolescentes con diabetes. Modalidad virtual.',
                    imagen: ['cae014.jpg', 'CAAE.jpg']
                },
                {
                    id: 9,
                    titulo: 'Cuenta cuentos:',
                    contenido: 'A través de la presentación de un relato, se trabaja con niñas y niños en el ' +
                        'acompañamiento emocional de su vida con diabetes. Se trata a través de talleres virtuales.',
                    imagen: ['cae014.jpg', 'CAAE.jpg']
                },
                {
                    id: 10,
                    titulo: 'Conteo de carbohidratos con Recetas caseras:',
                    contenido: 'Ciclo de talleres donde se trabaja una receta de ' +
                        'comida casera, mostrando de manera práctica cómo se calcula los carbohidratos. Modalidad ' +
                        'virtual.',
                    imagen: ['cae014.jpg', 'CAAE.jpg']
                }
                ]

        }]
        return campoAmigo;

    }

    getEscuela(tipo) {
        // @ts-ignore
        const escuela = new Nosotros();
        escuela.id = 1;
        escuela.secciones = [{
            id: 1,
            titulo: 'ESCUELA DE FORMACIÓN DE LÍDERES JUVENILES',
            imagen: ['CAE (2).jpg', 'cae003.jpg'],
            timeline: false,
            subseccion: [],
            contenido: 'La FDJE desde su inicio ha buscado incentivar a jóvenes con DM1 y sin DM1 a participar como líderes sociales, al inicio ejecutaban el papel de Monitores en Campo Amigo, donde eran admirados y respetados por los más pequeños y muchos crecieron anhelando ser Monitores. Actualmente se constituyó como proyecto permanente de la FDJE con el nombre “Escuela de formación de líderes juveniles” destinado a capacitar de manera integral a la base de jóvenes que han actuado o desean actuar como voluntarios en el trabajo que viene realizando la fundación.\n' +
                '\n' +
                '\n' +
                'Participan en las diferentes actividades de la FDJE como Campo Amigo, Jornadas familiares, motivan a niños con DM1 a un mejor control, tienen oportunidad de ir a intercambios internacionales donde el tema es la DM1.\n' +
                '\n' +
                '\n' +
                'A través de la Escuela de Formación de Líderes Juveniles se ha formado a un grupo de jóvenes que coplanifica junto con el Equipo Técnico y colabora durante el año en las distintas actividades de la FDJE. Los líderes son jóvenes voluntarios con y sin diabetes dispuestos a difundir y aportar en soluciones a la problemática de la DM1 en Ecuador, además realizan actividades comunitarias como levantamiento de información, capacitación y sensibilización sobre temas relacionados a la DM1.'
        },
            {
                id: 2,
                titulo: 'LECCIONES APRENDIDAS EN EL TRABAJO COMUNITARIO',
                imagen: ['educacin023.jpg'],
                timeline: true,
                subseccion: [],
                contenido: '“Trabajar en estas jornadas en Santa Elena me han ayudado a comprender mejor la dificultad económica que hay para el tratamiento de la DM1, además de las necesidades de conocimiento de parte de los padres para poder mantener controlada a esta enfermedad y promover que un día sus hijos puedan llegar a la autonomía”. Pablo Ramos, 20 años.'
            },
            {
                id: 3,
                imagen: ['educacion023.jpg'],
                timeline: true,
                subseccion: [],
                contenido: '“Me encantó esta experiencia, no sólo porque pude vivir de cerca la realidad en la que la gente de nuestro país se encuentra, sino porque también pudimos poner nuestro granito de arena para hacer de este un mundo mejor brindándoles lo que más necesitan y lo que más les va a servir en el futuro que es educación”. Martina Pinto, 16 años.'
            },
            {
                id: 4,
                imagen: ['educacion07.jpg'],
                timeline: true,
                subseccion: [],
                contenido: '“Al poder ver la vida de los niños con diabetes en Santa Elena, pude comprender que lo que siempre debe primar en un líder es la humildad, a través de sus vidas he aprendido a valorar mucho más mi propia vida”. Francisco Calero, 16 años.'
            },
            {
                id: 5,
                imagen: ['IMG_20190615_153702.jpg'],
                timeline: true,
                subseccion: [],
                contenido: '“Las jornadas familiares en Santa Elena me permitieron conocer una realidad más profunda sobre la diabetes y la cultura en el Ecuador. Esta experiencia me ayudó a reconocer que lo que para unos parece obvio, para otras personas requiere mucho más esfuerzo y un trabajo serio”. Nicholas Flores, 20 años.'
            },
            {
                id: 6,
                imagen: ['liderers011.jpg'],
                timeline: true,
                subseccion: [],
                contenido: '“En particular el haber conocido las casas de los niños con DM1 acogidos en el programa de Apadrinamiento hizo que de alguna forma como líderes valoremos más lo que tenemos y aprendamos a poner los pies sobre la tierra” Juan José Salazar, 20 años.'
            },
            {
                id: 7,
                imagen: ['inicio (3).jpg'],
                timeline: true,
                subseccion: [],
                contenido: '“Aprendí un poco más a manejar la motivación hacia los padres de los niños. Pude improvisar juegos y actividades con los niños más pequeños para que no se aburran”. Ariel Cañarte, 20 años.\n' +
                    '\n'
            },
            {
                id: 8,
                imagen: ['educación 001.jpg'],
                timeline: true,
                subseccion: [],
                contenido: '“En estas jornadas en Santa Elena experimenté más cariño por la gente, lo que me compromete más con la causa. Me llena además de satisfacción porque es un lindo trabajo, nos une a todos. Estos niños con algunas restricciones, logran llevar aceptablemente su DMI, lo que muchos no lo hacen ni en Quito con más recursos”. Guido Alarcón, 20 años.'
            }]
        return escuela;

    }
    getProgramas(tipo) {
        // @ts-ignore
        const programas = new Nosotros();
        programas.id = 1;
        programas.secciones = [{
            id: 1,
            titulo: 'Programas de Apadrinamiento',
            imagen: [''],
            timeline: false,
            subseccion: [],
            contenido: 'Este programa busca contribuir en la adherencia al tratamiento a ' +
                'la diabetes tipo 1 a través de la movilización de donaciones hacia las familias más vulnerables ' +
                'social o económicamente. Propone un plan amplio de capacitación, acompañamiento y ' +
                'seguimiento de los casos, promueve la corresponsabilidad familiar en el tema de salud y ' +
                'autocuidado.'
        },
            {
                id: 2,
                titulo: 'Ruta Recreativa con la Familia FDJE',
                imagen: [''],
                timeline: false,
                subseccion: [],
                contenido: 'Es una actividad con enfoque social destinado a promover el ' +
                    'encuentro entre familias con diabetes y la realización de ejercicio físico en espacios abiertos, en un ' +
                    'ambiente de camaradería. Modalidad presencial.'
            },
            {
                id: 3,
                titulo: 'Escuela de Formación de Líderes Juveniles',
                imagen: [''],
                timeline: false,
                subseccion: [],
                contenido: 'Este proyecto de carácter social, prepara a los jóvenes ' +
                    'que desean ayudar como voluntarios en los proyectos educativos de la FDJE. Es un espacio de ' +
                    'capacitación para jóvenes entre 16 y 23 años, en temas de diabetes, nutrición, psicología, ' +
                    'organización y diversión que busca la formación integral de líderes listos para interactuar, ' +
                    'compartir y monitorear a niños y adolescentes con diabetes tipo 1. Tiene modalidades presencial ' +
                    'y virtual.'
            }

        ]
        return programas;
    }

}
