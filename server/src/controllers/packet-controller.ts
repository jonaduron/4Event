import { Request, Response } from 'express';
import pool from  '../database';

class PacketController {

    public async getPacket(req: Request, res: Response):Promise<any> {
        const packet = await pool.query("SELECT * FROM paquetes WHERE id = ?", [req.params.id]);
        res.json(packet);
    }

    public async getPacketsByProvider(req: Request, res: Response):Promise<any> {
        const paquetes = await pool.query("SELECT * FROM paquetes WHERE proveedor_id = ?", [req.params.proveedor_id]);
        if(paquetes.length > 0) {
            res.json(paquetes);
        }
        else 
            res.json({message: "Hubo un pedo al seleccionar los paquetes de este proveedor"});
    }

    public async createPacket(req: Request, res: Response):Promise<void> {
        await pool.query("INSERT INTO paquetes SET ?", [req.body]);
        res.json({message: "El paquete ha sido creado"});
    }

    public async deletePacket(req: Request, res: Response):Promise<void> {
        pool.query("DELETE FROM paquetes WHERE id = ?", [req.params.id]);
        res.json({message: "El paquete ha sido eliminado"});
    }

    public async updatePacket(req: Request, res: Response):Promise<void> {
        pool.query("UPDATE paquetes SET ? WHERE id = ?", [req.body, req.params.id]);
        res.json({message: "El paquete ha sido actualizado"});
    }
}

const packetController = new PacketController();
export default packetController;