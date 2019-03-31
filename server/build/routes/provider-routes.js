"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var provider_controller_1 = __importDefault(require("../controllers/provider-controller"));
var ProviderRoutes = /** @class */ (function () {
    function ProviderRoutes() {
        this.router = express_1.Router();
        this.config();
    }
    // Falta definir las rutas exactas con las que trabajará cada método
    ProviderRoutes.prototype.config = function () {
        this.router.get('/', provider_controller_1.default.listProviders);
        this.router.get('/:id', provider_controller_1.default.getAProvider);
        this.router.put('/:id', provider_controller_1.default.updateProvider);
    };
    return ProviderRoutes;
}());
var providersRoutes = new ProviderRoutes();
exports.default = providersRoutes.router;
