"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const packet_controller_1 = __importDefault(require("../controllers/packet-controller"));
class PacketRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/details/:id', packet_controller_1.default.getPacket);
        this.router.get('/provider/:id_proveedor', packet_controller_1.default.getPacketsByProvider);
        this.router.post('/new', packet_controller_1.default.createPacket);
        this.router.put('/details/:id', packet_controller_1.default.updatePacket);
        this.router.delete('/details/:id', packet_controller_1.default.deletePacket);
    }
}
const packetRoutes = new PacketRoutes();
exports.default = packetRoutes.router;
