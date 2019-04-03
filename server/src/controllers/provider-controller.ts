import { Request, Response } from 'express';
import pool from '../database';

class ProvidersController {

    public async listProviders(req: Request, res: Response) {
        const providers = await pool.query("SELECT * FROM proveedor;");
        res.json(providers);
    }

    public async getAProvider(req: Request, res: Response) {
        const { id } = req.params;
        const providers = await pool.query("SELECT * FROM proveedor WHERE id = ?", [id]);
        if(providers.length > 0) {
            return res.json(providers);
        }
        res.status(404).json({text: "The provider does not exist"});
    }

    public updateProvider(req: Request, res: Response) {
        const { id } = req.params;
        pool.query("UPDATE proveedor SET ? WHERE id = ?", [req.body, id]);
        res.json({message: 'Provider has been updated'});
    }
}

const providersController = new ProvidersController();
export default providersController;