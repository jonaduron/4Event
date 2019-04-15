"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const customer_controller_1 = __importDefault(require("../controllers/customer-controller"));
class CustomerRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.delete('/details/:id', customer_controller_1.default.deleteCustomer);
        this.router.get('/details/:id', customer_controller_1.default.getCustomer);
        this.router.put('/details/:id', customer_controller_1.default.updateCustomer);
        this.router.put('/password/:usuario', customer_controller_1.default.updatePassword);
    }
}
const customerRoutes = new CustomerRoutes();
exports.default = customerRoutes.router;
