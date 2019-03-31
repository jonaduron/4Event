import { Router } from 'express';
import eventController from '../controllers/event-controller';

class EventRoutes {

    public router: Router = Router();
    constructor() {
        this.config();
    }

    // Falta definir las rutas para cada método a ejecutar
    config():void {
        this.router.post('/events/new', eventController.createEvent);
        this.router.get('/events/details/:id', eventController.getEvent);
        this.router.get('/events/:customer_id', eventController.getEventsByCustomer);
        this.router.get('/:proveedor_id/', eventController.getEventsByProvider);
        this.router.put('/events/details/:id', eventController.updateEvent);
    }
}

const eventRoutes = new EventRoutes();
export default eventRoutes.router;