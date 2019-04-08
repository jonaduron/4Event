"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const event_controller_1 = __importDefault(require("../controllers/event-controller"));
class EventRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.post('/new', event_controller_1.default.createEvent);
        this.router.get('/details/:id', event_controller_1.default.getEvent);
        this.router.get('/customer/:id_cliente', event_controller_1.default.getEventsByCustomer);
        this.router.get('/provider/:id_proveedor/', event_controller_1.default.getEventsByProvider);
        this.router.put('/details/:id', event_controller_1.default.updateEvent);
    }
}
const eventRoutes = new EventRoutes();
exports.default = eventRoutes.router;
