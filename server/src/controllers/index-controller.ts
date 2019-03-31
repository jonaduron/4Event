import { Request, Response } from 'express';
import pool from '../database';

class IndexController {
    
    public async login(req: Request, res: Response):Promise<any> {
        const valores = await pool.query('SELECT usuario, contrasena FROM login WHERE usuario = ?', 
            [req.params.usuario, req.params.contrasena]);
        if(valores[0] == req.params.usuario && valores[1] == req.params.contrasena) {
            return true;
        }
        else {
            return false;
        }
    }

    public async createCustomer(req: Request, res: Response):Promise<void> {
        await pool.query("INSERT INTO usuario set ?", [req.body]);
        res.json({message: 'El usuario ha sido agregado'});
    }
}

export const indexController = new IndexController();
