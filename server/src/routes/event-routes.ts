import { Router } from 'express';
import eventController from '../controllers/event-controller';

class EventRoutes {

    public router: Router = Router();
    constructor() {
        this.config();
    }

    // Falta definir las rutas para cada método a ejecutar
    config():void {
        this.router.post('/:id', eventController.createEvent);
        this.router.get('/', eventController.getEvent);
        this.router.get('/:cliente_id', eventController.getEventsByCustomer);
        this.router.get('/:proveedor_id', eventController.getEventsByProvider);
        this.router.put('/:id', eventController.updateEvent);
    }
}

const eventRoutes = new EventRoutes();
export default eventRoutes.router;