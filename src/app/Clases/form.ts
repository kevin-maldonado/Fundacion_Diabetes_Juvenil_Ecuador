export class FormEvents {
    id?: number;
    apellidos?: string;
    nombres?: string;
    edad?: string;
    fechaNacimiento?: Date;
    telefono?: string;
    celular?: string;
    correoElectronico?: string;
    ciudadResidencia?: string;
    tipoDiabetes?: string = 'Tipo de Diabetes';
    fechaDigDiabetes?: Date;
    tiempoDiabetes?: string = 'Años con diabetes';
    secAtenMEd: string = 'Sector de atención médica';
    servicio: string;
    nombreRepresentante?: string;
    telefonoRepresentante?: string;
}
