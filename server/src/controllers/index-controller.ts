import { Request, Response } from 'express';
import pool from '../database';

class IndexController {
    
    public index(req: Request, res: Response) {
        pool.query('DESCRIBE usuario');
        res.json({text: 'API IS IN CONTROLLER'});
    }
}

export const indexController = new IndexController();
