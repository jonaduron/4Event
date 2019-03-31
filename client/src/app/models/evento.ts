export interface evento {
    id: number;
    fecha: Date;
    descripcion?: string;
    tipo: string;
    id_proveedor: number;
    id_cliente: number;
}