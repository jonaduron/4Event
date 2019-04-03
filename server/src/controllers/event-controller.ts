import { Request, Response } from 'express';
import pool from '../database';

class EventController {

    public async createEvent(req: Request, res: Response):Promise<void> {
        //await pool.query("INSERT INTO evento SET ?", [req.body]);
        //pool.query("UPDATE paquete SET disponibilidad = disponibilidad - 1 WHERE id = ?", [req.params.id_paquete]);
        res.json({message: "El evento ha sido creado exitosamente"});
    }

    public async getEvent(req: Request, res: Response):Promise<any> {
        const evento = await pool.query("SELECT * FROM evento WHERE id = ?", [req.params.id]);
        if(evento.length > 0)
            return res.json(evento);
        res.status(404).json({message: "No se ha encontrado el evento"});
    }
    
    public async getEventsByCustomer(req: Request, res: Response):Promise<any> {
        const { id_cliente } = req.params;
        const eventos = await pool.query("SELECT * FROM evento WHERE id_cliente = ?", [id_cliente]);
        if(eventos.length > 0)
            return res.json(eventos);
        res.json({message: "No hay eventos a mostrar"}); 
    }

    public async getEventsByProvider(req: Request, res: Response):Promise<any> {
        const { id_proveedor } = req.params;
        const eventos = await pool.query("SELECT * FROM evento WHERE id_proveedor = ?", [id_proveedor]);
        if(eventos.length > 0)
            res.json(eventos);
        else 
            res.json({message: "No hay eventos a mostrar"}); 
        res.json({message: "Got events by provider"});
    }
    
    public async updateEvent(req: Request, res: Response) {
        await pool.query("UPDATE evento SET ? WHERE id = ?", [req.body, req.params.id]);
        res.json({message: "El evento ha sido actualizado"});
    }

}

const eventController = new EventController();
export default eventController;