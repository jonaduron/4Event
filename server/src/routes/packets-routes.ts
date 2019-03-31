import { Router } from 'express';
import packetController from '../controllers/packet-controller';

class PacketRoutes {

    public router: Router = Router();

    constructor() {
        this.config();
    }

    config():void {
        this.router.get('/packets/details/:id', packetController.getPacket);
        this.router.get('/packets/:proveedor_id', packetController.getPacketsByProvider);
        this.router.post('/packets/new', packetController.createPacket);
        this.router.put('/packets/details/:id', packetController.updatePacket);
        this.router.delete('/packets/details/:id', packetController.deletePacket);
    }
}

const packetRoutes = new PacketRoutes();
export default packetRoutes.router;