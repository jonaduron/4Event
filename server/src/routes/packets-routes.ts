import { Router } from 'express';
import packetController from '../controllers/packet-controller';

class PacketRoutes {

    public router: Router = Router();

    constructor() {
        this.config();
    }

    config():void {
        this.router.get('/details/:id', packetController.getPacket);
        this.router.get('/provider/:id_proveedor', packetController.getPacketsByProvider);
        this.router.post('/new', packetController.createPacket);
        this.router.put('/details/:id', packetController.updatePacket);
        this.router.delete('/details/:id', packetController.deletePacket);
    }
}

const packetRoutes = new PacketRoutes();
export default packetRoutes.router;