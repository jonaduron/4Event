import { Router } from 'express';
import providersController from '../controllers/provider-controller';

class ProviderRoutes {
    
    public router: Router = Router();

    constructor() {
        this.config();
    }

    // Falta definir las rutas exactas con las que trabajará cada método
    config():void {
        this.router.get('/', providersController.listProviders);
        this.router.get('/:id', providersController.getAProvider);
        this.router.put('/:id', providersController.updateProvider);
    }
}

const providersRoutes = new ProviderRoutes();
export default providersRoutes.router;