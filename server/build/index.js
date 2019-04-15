"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const cors_1 = __importDefault(require("cors"));
const index_routes_1 = __importDefault(require("./routes/index-routes"));
const report_routes_1 = __importDefault(require("./routes/report-routes"));
const customer_routes_1 = __importDefault(require("./routes/customer-routes"));
const event_routes_1 = __importDefault(require("./routes/event-routes"));
const provider_routes_1 = __importDefault(require("./routes/provider-routes"));
const packets_routes_1 = __importDefault(require("./routes/packets-routes"));
class Server {
    constructor() {
        this.app = express_1.default();
        this.config();
        this.routes();
    }
    config() {
        this.app.set('port', process.env.PORT || 3000);
        this.app.use(morgan_1.default('dev'));
        this.app.use(cors_1.default());
        this.app.use(express_1.default.json());
        this.app.use(express_1.default.urlencoded({ extended: false }));
    }
    routes() {
        this.app.use('/', index_routes_1.default);
        this.app.use('/customers', customer_routes_1.default);
        this.app.use('/reports', report_routes_1.default);
        this.app.use('/events', event_routes_1.default);
        this.app.use('/providers', provider_routes_1.default);
        this.app.use('/packets', packets_routes_1.default);
    }
    start() {
        this.app.listen(this.app.get('port'), () => {
            console.log("server running on port " + this.app.get('port'));
        });
    }
}
const server = new Server();
server.start();
