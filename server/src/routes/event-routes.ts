import { Router } from 'express';
import eventController from '../controllers/event-controller';

class EventRoutes {

    public router: Router = Router();
    constructor() {
        this.config();
    }

    config():void {
        this.router.post('/new', eventController.createEvent);
        this.router.get('/details/:id', eventController.getEvent);
        this.router.get('/customer/:id_cliente', eventController.getEventsByCustomer);
        this.router.get('/provider/:id_proveedor', eventController.getEventsByProvider);
        this.router.put('/details/:id', eventController.updateEvent);
    }
}

const eventRoutes = new EventRoutes();
export default eventRoutes.router;