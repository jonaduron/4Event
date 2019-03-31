export interface usuario{
    id: number;
    nombre: string;
    telefono: string;
    correo_electronico: string;
    direccion?: string;
    foto?: File;
}