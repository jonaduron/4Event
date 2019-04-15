import { Router } from 'express';
import customerController from '../controllers/customer-controller';

class CustomerRoutes {

    public router: Router = Router();

    constructor() {
        this.config();
    }

    config():void {
        this.router.delete('/details/:id', customerController.deleteCustomer);
        this.router.get('/details/:id', customerController.getCustomer);
        this.router.put('/details/:id', customerController.updateCustomer);
        this.router.put('/password/:usuario', customerController.updatePassword);
    }
}

const customerRoutes = new CustomerRoutes();
export default customerRoutes.router;