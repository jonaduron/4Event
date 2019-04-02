"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var customer_controller_1 = __importDefault(require("../controllers/customer-controller"));
var CustomerRoutes = /** @class */ (function () {
    function CustomerRoutes() {
        this.router = express_1.Router();
        this.config();
    }
    // Falta definir las rutas con las que trabajará cada método
    CustomerRoutes.prototype.config = function () {
        this.router.delete('/details/:id', customer_controller_1.default.deleteCustomer);
        this.router.get('/details/:id', customer_controller_1.default.getCustomer);
        this.router.put('/details/:id', customer_controller_1.default.updateCustomer);
    };
    return CustomerRoutes;
}());
var customerRoutes = new CustomerRoutes();
exports.default = customerRoutes.router;
