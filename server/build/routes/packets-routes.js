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
        this.router.get('/', packet_controller_1.default.getPacket);
        this.router.get('/', packet_controller_1.default.getPacketsByProvider);
    };
    return PacketRoutes;
}());
var packetRoutes = new PacketRoutes();
exports.default = packetRoutes.router;
