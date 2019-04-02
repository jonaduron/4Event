export interface proveedor {
    id: number;
    nombre: string;
    rama: string;
    descripcion?: string;
    telefono: string;
    correo_electronico: string;
    direccion: string;
    foto?: File;
    usuario: string;
}