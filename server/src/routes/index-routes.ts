import { Router } from 'express';
import { indexController } from '../controllers/index-controller';

export class IndexRoutes {
 
    public router: Router = Router();

    constructor() {
        this.config();
    }

    config():void {
        this.router.post('/new', indexController.createCustomer);
        this.router.get('/login:/usuario', indexController.login);
    }
}

const indexRoutes = new IndexRoutes();
export default indexRoutes.router;