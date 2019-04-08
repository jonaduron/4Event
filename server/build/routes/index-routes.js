"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const index_controller_1 = require("../controllers/index-controller");
class IndexRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.post('/new', index_controller_1.indexController.createCustomer);
        this.router.get('/login/:usuario', index_controller_1.indexController.login);
    }
}
exports.IndexRoutes = IndexRoutes;
const indexRoutes = new IndexRoutes();
exports.default = indexRoutes.router;
