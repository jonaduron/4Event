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
var EventController = /** @class */ (function () {
    function EventController() {
    }
    EventController.prototype.createEvent = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                //await pool.query("INSERT INTO evento SET ?", [req.body]);
                //pool.query("UPDATE paquete SET disponibilidad = disponibilidad - 1 WHERE id = ?", [req.params.id_paquete]);
                res.json({ message: "El evento ha sido creado exitosamente" });
                return [2 /*return*/];
            });
        });
    };
    EventController.prototype.getEvent = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var evento;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, database_1.default.query("SELECT * FROM evento WHERE id = ?", [req.params.id])];
                    case 1:
                        evento = _a.sent();
                        if (evento.length > 0)
                            return [2 /*return*/, res.json(evento)];
                        res.status(404).json({ message: "No se ha encontrado el evento" });
                        return [2 /*return*/];
                }
            });
        });
    };
    EventController.prototype.getEventsByCustomer = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var id_cliente, eventos;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        id_cliente = req.params.id_cliente;
                        return [4 /*yield*/, database_1.default.query("SELECT * FROM evento WHERE id_cliente = ?", [id_cliente])];
                    case 1:
                        eventos = _a.sent();
                        if (eventos.length > 0)
                            return [2 /*return*/, res.json(eventos)];
                        res.json({ message: "No hay eventos a mostrar" });
                        return [2 /*return*/];
                }
            });
        });
    };
    EventController.prototype.getEventsByProvider = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var id_proveedor, eventos;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        id_proveedor = req.params.id_proveedor;
                        return [4 /*yield*/, database_1.default.query("SELECT * FROM evento WHERE id_proveedor = ?", [id_proveedor])];
                    case 1:
                        eventos = _a.sent();
                        if (eventos.length > 0)
                            res.json(eventos);
                        else
                            res.json({ message: "No hay eventos a mostrar" });
                        res.json({ message: "Got events by provider" });
                        return [2 /*return*/];
                }
            });
        });
    };
    EventController.prototype.updateEvent = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, database_1.default.query("UPDATE evento SET ? WHERE id = ?", [req.body, req.params.id])];
                    case 1:
                        _a.sent();
                        res.json({ message: "El evento ha sido actualizado" });
                        return [2 /*return*/];
                }
            });
        });
    };
    return EventController;
}());
var eventController = new EventController();
exports.default = eventController;
