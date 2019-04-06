import { Request, Response } from 'express';
import pool from '../database';

class ReportController {

    public async getEventsDetails(req: Request, res: Response):Promise<any> {
        const eventos = await pool.query(
            "SELECT e.id, e.fecha, e.tipo, e.estado, u1.nombre AS 'proveedor', p.nombre AS 'paquete', u2.nombre AS 'cliente' " +
            "FROM evento e " +
            "LEFT JOIN usuario u1 ON e.id_proveedor = u1.id " +
            "LEFT JOIN usuario u2 ON e.id_cliente = u2.id " + 
            "JOIN paquete p ON e.id_paquete = p.id " + 
            "ORDER BY e.id;");
        res.json(eventos); 
    }

    public async getPacketsAndEventsType(req: Request, res: Response):Promise<any> {
        const paquetes = await pool.query(
            "SELECT us.nombre AS 'proveedor', pa.nombre AS 'paquete', pa.precio, ev.tipo AS 'tipo de evento'" + 
            "FROM usuario us " + 
            "LEFT JOIN paquete pa ON us.id = pa.id_proveedor " + 
            "LEFT JOIN evento ev ON pa.id = ev.id_paquete;");
        res.json(paquetes);
    }

    public async getProviderPacketsAndDisponibility(req: Request, res: Response):Promise<any> {
        const paquetes = await pool.query(
            "SELECT pa.id, pa.nombre, pa.precio, pa.disponibilidad, us.nombre AS 'proveedor'" + 
            "FROM paquete pa " + 
            "LEFT JOIN usuario us ON pa.id_proveedor = us.id;");
        res.json(paquetes);
    }

    public async getCustomerAndProvider(req: Request, res: Response):Promise<any> {
        const customers = await pool.query(
            "SELECT ev.id, us1.nombre AS 'cliente', us1.apellidos AS 'apellido', us1.direccion AS 'dirección del cliente', " + 
            "us2.nombre AS 'proveedor', us2.direccion AS 'direccion del proveedor'" + 
            "FROM evento ev " + 
            "JOIN usuario us1 ON ev.id_cliente = us1.id " + 
            "JOIN usuario us2 ON ev.id_proveedor = us2.id;");
        res.json(customers);
    }
}

const reportController = new ReportController();
export default reportController;
