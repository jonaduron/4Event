export interface cliente{
    id: number;
    usuario: string;
    contrasena:string;
    nombre: string;
    apellidos: string;
    telefono: string;
    correo_electronico: string;
    direccion: string;
    tipo:string;
    detalles:string;
    esProveedor:boolean;
    foto?:File;
}