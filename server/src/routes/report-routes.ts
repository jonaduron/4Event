import { Router } from 'express';
import reportController from '../controllers/report-controller';

class ReportRoutes {

    public router: Router =  Router();

    constructor() {
        this.config();
    }

    config():void {
        this.router.get('/reportes', reportController.getEventsDetails);
        this.router.get('/reportes', reportController.getPacketsAndEventsType);
        this.router.get('/reportes', reportController.getProviderPacketsAndDisponibility);
        this.router.get('/reportes', reportController.getCustomerAndProvider);
    }
}

const reportRoutes = new ReportRoutes();
export default reportRoutes.router;
