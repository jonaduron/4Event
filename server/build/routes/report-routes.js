"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var report_controller_1 = __importDefault(require("../controllers/report-controller"));
var ReportRoutes = /** @class */ (function () {
    function ReportRoutes() {
        this.router = express_1.Router();
        this.config();
    }
    ReportRoutes.prototype.config = function () {
        this.router.get('/eventsdetails', report_controller_1.default.getEventsDetails);
        this.router.get('/packetandevents', report_controller_1.default.getPacketsAndEventsType);
        this.router.get('/packetsdetails', report_controller_1.default.getProviderPacketsAndDisponibility);
        this.router.get('/customersandproviders', report_controller_1.default.getCustomerAndProvider);
    };
    return ReportRoutes;
}());
var reportRoutes = new ReportRoutes();
exports.default = reportRoutes.router;
