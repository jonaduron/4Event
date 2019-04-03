"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var morgan_1 = __importDefault(require("morgan"));
var cors_1 = __importDefault(require("cors"));
var index_routes_1 = __importDefault(require("./routes/index-routes"));
var report_routes_1 = __importDefault(require("./routes/report-routes"));
var customer_routes_1 = __importDefault(require("./routes/customer-routes"));
var event_routes_1 = __importDefault(require("./routes/event-routes"));
var provider_routes_1 = __importDefault(require("./routes/provider-routes"));
var packets_routes_1 = __importDefault(require("./routes/packets-routes"));
var Server = /** @class */ (function () {
    function Server() {
        this.app = express_1.default();
        this.config();
        this.routes();
    }
    Server.prototype.config = function () {
        this.app.set('port', process.env.PORT || 3000);
        this.app.use(morgan_1.default('dev'));
        this.app.use(cors_1.default());
        this.app.use(express_1.default.json());
        this.app.use(express_1.default.urlencoded({ extended: false }));
    };
    Server.prototype.routes = function () {
        this.app.use('/', index_routes_1.default);
        this.app.use('/customers', customer_routes_1.default);
        this.app.use('/reports', report_routes_1.default);
        this.app.use('/events', event_routes_1.default);
        this.app.use('/providers', provider_routes_1.default);
        this.app.use('/packets', packets_routes_1.default);
    };
    Server.prototype.start = function () {
        var _this = this;
        this.app.listen(this.app.get('port'), function () {
            console.log("server running on port " + _this.app.get('port'));
        });
    };
    return Server;
}());
var server = new Server();
server.start();
