"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const report_controller_1 = __importDefault(require("../controllers/report-controller"));
class ReportRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/eventsdetails', report_controller_1.default.getEventsDetails);
        this.router.get('/packetsandevents', report_controller_1.default.getPacketsAndEventsType);
        this.router.get('/packetsdetails', report_controller_1.default.getProviderPacketsAndDisponibility);
        this.router.get('/customersandproviders', report_controller_1.default.getCustomerAndProvider);
    }
}
const reportRoutes = new ReportRoutes();
exports.default = reportRoutes.router;
