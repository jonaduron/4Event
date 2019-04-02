import { Request, Response} from 'express';
import pool from '../database';

class CustomerController {

    public async getCustomer(req: Request, res: Response):Promise<any> {
        const customers = await pool.query("SELECT * FROM cliente WHERE id = ?", [req.params.id]);
        if(customers.length > 0) {
            return res.json(customers[0]);
        }
        res.status(404).json({message: "An error has occurred."});
    }

    public async updateCustomer(req: Request, res: Response):Promise<void> {
        await pool.query("UPDATE cliente SET ? WHERE id = ?", [req.body, req.params.id]);
        res.json({message: "The user has been updated"});
    }

    public async deleteCustomer(req: Request, res: Response):Promise<void> {
        await pool.query("DELETE FROM cliente WHERE id = ?", [req.params.id]);
        res.json({message: "The user has been deleted succesfully"});
    }
}

const customerController = new CustomerController();
export default customerController;