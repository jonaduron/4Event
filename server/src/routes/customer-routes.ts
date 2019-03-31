import { Router } from 'express';
import customerController from '../controllers/customer-controller';

class CustomerRoutes {

    public router: Router = Router();

    constructor() {
        this.config();
    }

    // Falta definir las rutas con las que trabajará cada método
    config():void {
        this.router.delete('/customer/details/:id', customerController.deleteCustomer);
        this.router.get('customer/details/:id', customerController.getCustomer);
        this.router.put('customer/details/:id', customerController.updateCustomer);
    }
}

const customerRoutes = new CustomerRoutes();
export default customerRoutes.router;