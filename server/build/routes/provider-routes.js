"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const provider_controller_1 = __importDefault(require("../controllers/provider-controller"));
class ProviderRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', provider_controller_1.default.listProviders);
        this.router.get('/details/:id', provider_controller_1.default.getAProvider);
        this.router.put('/details/:id', provider_controller_1.default.updateProvider);
    }
}
const providersRoutes = new ProviderRoutes();
exports.default = providersRoutes.router;
