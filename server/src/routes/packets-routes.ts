import { Router } from 'express';
import packetController from '../controllers/packet-controller';

class PacketRoutes {

    public router: Router = Router();

    constructor() {
        this.config();
    }

    config():void {
        this.router.get('/', packetController.getPacket);
        this.router.get('/', packetController.getPacketsByProvider);
        this.router.post('/', packetController.createPacket);
        this.router.put('/', packetController.updatePacket);
        this.router.delete('', packetController.deletePacket);
    }
}

const packetRoutes = new PacketRoutes();
export default packetRoutes.router;