import { Request, Response } from 'express';
import pool from '../database';

class ReportController {

    public async getEventsDetails(req: Request, res: Response):Promise<any> {
        const eventos = await pool.query(
            "SELECT evento.id, evento.fecha, proveedor.nombre, paquete.nombre, cliente.nombre " +
            "FROM evento " +
            "JOIN proveedor ON evento.id_proveedor = proveedor.id " +
            "JOIN cliente ON evento.id_cliente = cliente.id " + 
            "JOIN paquete ON evento.id_paquete = paquete.id;");
        res.json(eventos);
    }

    public async getPacketsAndEventsType(req: Request, res: Response):Promise<any> {
        const paquetes = await pool.query("SELECT proveedor.nombre, paquete.nombre, paquete.precio, evento.tipo " + 
            "FROM proveedor " + 
            "JOIN paquete ON proveedor.id = paquete.id_proveedor " + 
            "JOIN evento ON paquete.id = evento.id_paquete;");
        res.json(paquetes);
    }

    public async getProviderPacketsAndDisponibility(req: Request, res: Response):Promise<any> {
        const paquetes = await pool.query("SELECT paquete.id, paquete.nombre, paquete.precio, paquete.disponibilidad, proveedor.nombre " + 
            "FROM paquete " + 
            "JOIN proveedor ON paquete.id_proveedor = proveedor.id;");
        res.json(paquetes);
    }

    public async getCustomerAndProvider(req: Request, res: Response):Promise<any> {
        const customers = await pool.query("SELECT evento.id, cliente.nombre, cliente.apellidoPaterno, cliente.direccion, proveedor.nombre, proveedor.direccion " + 
            "FROM evento " + 
            "JOIN cliente ON evento.id_cliente = cliente.id " + 
            "JOIN proveedor ON evento.id_proveedor = proveedor.id;");
        res.json(customers);
    }
}

const reportController = new ReportController();
export default reportController;
