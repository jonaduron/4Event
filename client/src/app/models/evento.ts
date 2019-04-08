export interface evento {
    id: number;
    fecha: Date;
    tipo: string;
    descripcion?: string;
    estado?: string;
    id_proveedor: number;
    id_cliente: number;
    id_paquete: number;
}