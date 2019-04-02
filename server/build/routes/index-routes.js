"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var index_controller_1 = require("../controllers/index-controller");
var IndexRoutes = /** @class */ (function () {
    function IndexRoutes() {
        this.router = express_1.Router();
        this.config();
    }
    IndexRoutes.prototype.config = function () {
        this.router.post('/new', index_controller_1.indexController.createCustomer);
        this.router.get('/login', index_controller_1.indexController.login);
    };
    return IndexRoutes;
}());
exports.IndexRoutes = IndexRoutes;
var indexRoutes = new IndexRoutes();
exports.default = indexRoutes.router;
