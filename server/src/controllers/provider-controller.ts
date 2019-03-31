import { Request, Response } from 'express';
import pool from '../database';

class ProvidersController {

    public async listProviders(req: Request, res: Response) {
        const providers = await pool.query("SELECT * FROM usuario;");
        res.json(providers);
    }

    public async getAProvider(req: Request, res: Response) {
        const providers = await pool.query("SELECT * FROM usuario WHERE id = ?", [req.params.id]);
        if(providers.length > 0) {
            return res.json(providers[0]);
        }
        res.status(404).json({text: "The provider does not exist"});
    }

    public updateProvider(req: Request, res: Response) {
        pool.query("UPDATE usuario SET ? WHERE id = ?", [req.body, req.params.id]);
        res.json({message: 'Provider has been updated'});
    }
}

const providersController = new ProvidersController();
export default providersController;