export interface PerfilIBD {
    id?: number;
    nombre: string;
    descripcion: string;
    foto: string;
}

export interface ExpIDB {
    id?: number;
    puesto: string;
    inicio: String;
    final: String;
    dec_puesto: string;
    empresa: string;
    url_logo: string;
}

export interface HabIDB {
    id?: number;
    tecnologia: string;
    porcentaje: number;
    colorBaraFuerte: string;
    colorBaraDebil: string;
}

export interface CapIDB {
    id?: number;
    titulo: string;
    descripcion: string;
    urlLogo: string;
    formador: string;
}