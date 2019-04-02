import { Request, Response } from 'express';
import pool from '../database';

class ReportController {

    public async getEventsDetails(req: Request, res: Response):Promise<any> {
        const eventos = await pool.query(
            "SELECT evento.id, evento.fecha, evento.tipo, proveedor.nombre AS 'proveedor', paquete.nombre AS 'paquete', cliente.nombre AS 'cliente' " +
            "FROM evento " +
            "JOIN proveedor ON evento.id_proveedor = proveedor.id " +
            "JOIN cliente ON evento.id_cliente = cliente.id " + 
            "JOIN paquete ON evento.id_paquete = paquete.id;");
        res.json(eventos); 
    }

    public async getPacketsAndEventsType(req: Request, res: Response):Promise<any> {
        const paquetes = await pool.query(
            "SELECT proveedor.nombre AS 'proveedor', paquete.nombre AS 'paquete', paquete.precio, evento.tipo AS 'tipo de evento'" + 
            "FROM proveedor " + 
            "JOIN paquete ON proveedor.id = paquete.id_proveedor " + 
            "JOIN evento ON paquete.id = evento.id_paquete;");
        res.json(paquetes);
    }

    public async getProviderPacketsAndDisponibility(req: Request, res: Response):Promise<any> {
        const paquetes = await pool.query(
            "SELECT paquete.id, paquete.nombre, paquete.precio, paquete.disponibilidad, proveedor.nombre AS 'proveedor'" + 
            "FROM paquete " + 
            "JOIN proveedor ON paquete.id_proveedor = proveedor.id;");
        res.json(paquetes);
    }

    public async getCustomerAndProvider(req: Request, res: Response):Promise<any> {
        const customers = await pool.query(
            "SELECT evento.id, cliente.nombre AS 'cliente', cliente.apellidoPaterno AS 'apellido', cliente.direccion AS 'dirección del cliente', " + 
            "proveedor.nombre AS 'proveedor', proveedor.direccion AS 'direccion del proveedor'" + 
            "FROM evento " + 
            "JOIN cliente ON evento.id_cliente = cliente.id " + 
            "JOIN proveedor ON evento.id_proveedor = proveedor.id;");
        res.json(customers);
    }
}

const reportController = new ReportController();
export default reportController;
