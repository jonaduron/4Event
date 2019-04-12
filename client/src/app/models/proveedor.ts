export interface proveedor {
    id: number;
    usuario: string;
    contrasena: string;
    nombre: string;
    telefono: string;
    correo_electronico: string;
    direccion: string;
    tipo: string;
    detalles: string;
    foto?: File
}