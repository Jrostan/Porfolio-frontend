export interface PerfilIBD {
    id?: number;
    nombre: string;
    descripcion: string;
    urlFoto: string;
    oriundo: string;
    titulo: string;
}

export interface ExpIDB {
    id?: number;
    puesto: string;
    fechainicio: String;
    fechaFinal: String;
    descPuesto: string;
    empresa: string;
    urlLogo: string;
}

export interface HabIDB {
    id?: number;
    tecnologia: string;
    porcentaje: number;
    colorBarraFuerte: string;
    colorBarraDebil: string;
}

export interface CapIDB {
    id?: number;
    titulo: string;
    descripcion: string;
    urlLogo: string;
    formador: string;
}

export interface TpIDB {
    id?: number;
    proyecto: string;
    descripcion: string;
    urlImagen: string;
    link: string;
}