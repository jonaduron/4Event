import { Request, Response } from 'express';
import pool from '../database';

class EventController {

    public async createEvent(req: Request, res: Response):Promise<void> {
        await pool.query("INSERT INTO evento SET ?", [req.body]);
        res.json({message: "El evento ha sido creado exitosamente"});
    }

    public async getEvent(req: Request, res: Response):Promise<any> {
        const evento = await pool.query("SELECT * FROM eventos WHERE id = ?", [req.params.id]);
        if(evento.length > 0)
            return res.json(evento[0]);
        res.status(404).json({message: "No se ha encontrado el evento"});
    }
    
    public async getEventsByCustomer(req: Request, res: Response):Promise<any> {
        const eventos = await pool.query("SELECT * FROM eventos WHERE client_id = ?", [req.params.client_id]);
        if(eventos.length > 0)
            res.json(eventos);
        else 
            res.json({message: "No hay eventos a mostrar"});
    }

    public async getEventsByProvider(req: Request, res: Response):Promise<any> {
        const eventos = await pool.query("SELECT * FROM eventos WHERE proveedor_id = ?", [req.params.proveedor_id]);
        if(eventos.length > 0)
            res.json(eventos);
        else 
            res.json({message: "No hay eventos a mostrar"});
    }
    
    public async updateEvent(req: Request, res: Response) {
        await pool.query("UPDATE eventos SET ? WHERE id = ?", [req.body, req.params.id]);
        res.json({message: "El evento ha sido actualizado"});
    }

}

const eventController = new EventController();
export default eventController;