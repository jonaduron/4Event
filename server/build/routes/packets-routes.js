"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var packet_controller_1 = __importDefault(require("../controllers/packet-controller"));
var PacketRoutes = /** @class */ (function () {
    function PacketRoutes() {
        this.router = express_1.Router();
        this.config();
    }
    PacketRoutes.prototype.config = function () {
        this.router.get('/packets/details/:id', packet_controller_1.default.getPacket);
        this.router.get('/packets/:proveedor_id', packet_controller_1.default.getPacketsByProvider);
        this.router.post('/packets/new', packet_controller_1.default.createPacket);
        this.router.put('/packets/details/:id', packet_controller_1.default.updatePacket);
        this.router.delete('/packets/details/:id', packet_controller_1.default.deletePacket);
    };
    return PacketRoutes;
}());
var packetRoutes = new PacketRoutes();
exports.default = packetRoutes.router;
