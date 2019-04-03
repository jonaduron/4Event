import { Request, Response } from 'express';
import pool from  '../database';

class PacketController {

    public async getPacket(req: Request, res: Response):Promise<any> {
        const { id } = req.params;
        const packet = await pool.query("SELECT * FROM paquete WHERE id = ?", [id]);
        res.json(packet);
    }

    public async getPacketsByProvider(req: Request, res: Response):Promise<any> {
        const { id_proveedor } = req.params;
        const paquetes = await pool.query("SELECT * FROM paquete WHERE id_proveedor = ?", [id_proveedor]);
        if(paquetes.length > 0) {
            res.json(paquetes);
        }
        else 
            res.json({message: "Hubo un pedo al seleccionar los paquetes de este proveedor"});
    }

    public async createPacket(req: Request, res: Response):Promise<void> {
        await pool.query("INSERT INTO paquete SET ?", [req.body]);
        res.json({message: "El paquete ha sido creado"});
    }

    public async deletePacket(req: Request, res: Response):Promise<void> {
        const { id } = req.params;
        pool.query("DELETE FROM paquete WHERE id = ?", [id]);
        res.json({message: "El paquete ha sido eliminado"});
    }

    public async updatePacket(req: Request, res: Response):Promise<void> {
        const { id } = req.params;
        pool.query("UPDATE paquete SET ? WHERE id = ?", [req.body, id]);
        res.json({message: "El paquete ha sido actualizado"});
    }
}

const packetController = new PacketController();
export default packetController;