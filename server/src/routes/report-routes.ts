import { Router } from 'express';
import reportController from '../controllers/report-controller';

class ReportRoutes {

    public router: Router =  Router();

    constructor() {
        this.config();
    }

    config():void {
        this.router.get('/eventsdetails', reportController.getEventsDetails);
        this.router.get('/packetandevents', reportController.getPacketsAndEventsType);
        this.router.get('/packetsdetails', reportController.getProviderPacketsAndDisponibility);
        this.router.get('/customersandproviders', reportController.getCustomerAndProvider);
    }
}

const reportRoutes = new ReportRoutes();
export default reportRoutes.router;
