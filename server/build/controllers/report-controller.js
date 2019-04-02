"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var database_1 = __importDefault(require("../database"));
var ReportController = /** @class */ (function () {
    function ReportController() {
    }
    ReportController.prototype.getEventsDetails = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var eventos;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, database_1.default.query("SELECT evento.id, evento.fecha, evento.tipo, proveedor.nombre AS 'proveedor', paquete.nombre AS 'paquete', cliente.nombre AS 'cliente' " +
                            "FROM evento " +
                            "JOIN proveedor ON evento.id_proveedor = proveedor.id " +
                            "JOIN cliente ON evento.id_cliente = cliente.id " +
                            "JOIN paquete ON evento.id_paquete = paquete.id;")];
                    case 1:
                        eventos = _a.sent();
                        res.json(eventos);
                        return [2 /*return*/];
                }
            });
        });
    };
    ReportController.prototype.getPacketsAndEventsType = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var paquetes;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, database_1.default.query("SELECT proveedor.nombre AS 'proveedor', paquete.nombre AS 'paquete', paquete.precio, evento.tipo AS 'tipo de evento'" +
                            "FROM proveedor " +
                            "JOIN paquete ON proveedor.id = paquete.id_proveedor " +
                            "JOIN evento ON paquete.id = evento.id_paquete;")];
                    case 1:
                        paquetes = _a.sent();
                        res.json(paquetes);
                        return [2 /*return*/];
                }
            });
        });
    };
    ReportController.prototype.getProviderPacketsAndDisponibility = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var paquetes;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, database_1.default.query("SELECT paquete.id, paquete.nombre, paquete.precio, paquete.disponibilidad, proveedor.nombre AS 'proveedor'" +
                            "FROM paquete " +
                            "JOIN proveedor ON paquete.id_proveedor = proveedor.id;")];
                    case 1:
                        paquetes = _a.sent();
                        res.json(paquetes);
                        return [2 /*return*/];
                }
            });
        });
    };
    ReportController.prototype.getCustomerAndProvider = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var customers;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, database_1.default.query("SELECT evento.id, cliente.nombre AS 'cliente', cliente.apellidoPaterno AS 'apellido', cliente.direccion AS 'dirección del cliente', " +
                            "proveedor.nombre AS 'proveedor', proveedor.direccion AS 'direccion del proveedor'" +
                            "FROM evento " +
                            "JOIN cliente ON evento.id_cliente = cliente.id " +
                            "JOIN proveedor ON evento.id_proveedor = proveedor.id;")];
                    case 1:
                        customers = _a.sent();
                        res.json(customers);
                        return [2 /*return*/];
                }
            });
        });
    };
    return ReportController;
}());
var reportController = new ReportController();
exports.default = reportController;
