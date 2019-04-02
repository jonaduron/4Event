export interface cliente{
    id: number;
    nombre: string;
    apellidoPaterno: string;
    apellidoMaterno?: string;
    telefono: string;
    correo_electronico: string;
    direccion: string;
    foto?: File;
    usuario: string;
}