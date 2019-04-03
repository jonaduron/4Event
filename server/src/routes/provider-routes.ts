import { Router } from 'express';
import providersController from '../controllers/provider-controller';

class ProviderRoutes {
    
    public router: Router = Router();

    constructor() {
        this.config();
    }

    config():void {
        this.router.get('/', providersController.listProviders);
        this.router.get('/details/:id', providersController.getAProvider);
        this.router.put('/details/:id', providersController.updateProvider);
    }
}

const providersRoutes = new ProviderRoutes();
export default providersRoutes.router;