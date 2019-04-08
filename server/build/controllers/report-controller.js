"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const database_1 = __importDefault(require("../database"));
class ReportController {
    getEventsDetails(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const eventos = yield database_1.default.query("SELECT e.id, e.fecha, e.tipo, e.estado, u1.nombre AS 'proveedor', p.nombre AS 'paquete', u2.nombre AS 'cliente' " +
                "FROM evento e " +
                "LEFT JOIN usuario u1 ON e.id_proveedor = u1.id " +
                "LEFT JOIN usuario u2 ON e.id_cliente = u2.id " +
                "JOIN paquete p ON e.id_paquete = p.id " +
                "ORDER BY e.id;");
            res.json(eventos);
        });
    }
    getPacketsAndEventsType(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const paquetes = yield database_1.default.query("SELECT us.nombre AS 'proveedor', pa.nombre AS 'paquete', pa.precio, ev.tipo AS 'tipo de evento'" +
                "FROM usuario us " +
                "LEFT JOIN paquete pa ON us.id = pa.id_proveedor " +
                "LEFT JOIN evento ev ON pa.id = ev.id_paquete;");
            res.json(paquetes);
        });
    }
    getProviderPacketsAndDisponibility(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const paquetes = yield database_1.default.query("SELECT pa.id, pa.nombre, pa.precio, pa.disponibilidad, us.nombre AS 'proveedor'" +
                "FROM paquete pa " +
                "LEFT JOIN usuario us ON pa.id_proveedor = us.id;");
            res.json(paquetes);
        });
    }
    getCustomerAndProvider(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const customers = yield database_1.default.query("SELECT ev.id, us1.nombre AS 'cliente', us1.apellidos AS 'apellido', us1.direccion AS 'dirección del cliente', " +
                "us2.nombre AS 'proveedor', us2.direccion AS 'direccion del proveedor'" +
                "FROM evento ev " +
                "JOIN usuario us1 ON ev.id_cliente = us1.id " +
                "JOIN usuario us2 ON ev.id_proveedor = us2.id;");
            res.json(customers);
        });
    }
}
const reportController = new ReportController();
exports.default = reportController;
