import { Request, Response } from 'express';
import pool from '../database';

class IndexController {
    
    public async login(req: Request, res: Response):Promise<any> {
        const { usuario } = req.params;
        const valores = await pool.query('SELECT esProveedor,contrasena FROM usuario WHERE usuario = ?', [usuario]);
        // if(valores[0] == req.params.usuario && valores[1] == req.params.contrasena) {
        //     return true;
        // }
        // else {
        //     return false;
        // }
        res.json(valores);
    }

    public async createCustomer(req: Request, res: Response):Promise<void> {
        await pool.query("INSERT INTO usuario set ?", [req.body]);
        res.json({message: 'El usuario ha sido agregado'});
    }
}

export const indexController = new IndexController();
