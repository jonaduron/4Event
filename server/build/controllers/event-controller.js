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
class EventController {
    createEvent(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield database_1.default.query("INSERT INTO evento SET ?", [req.body]);
            database_1.default.query("UPDATE paquete SET disponibilidad = disponibilidad - 1 WHERE id = ?", [req.params.id_paquete]);
            res.json({ message: "El evento ha sido creado exitosamente" });
        });
    }
    getEvent(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const evento = yield database_1.default.query("SELECT * FROM evento WHERE id = ?", [req.params.id]);
            if (evento.length > 0)
                return res.json(evento);
            res.status(404).json({ message: "No se ha encontrado el evento" });
        });
    }
    getEventsByCustomer(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id_cliente } = req.params;
            const eventos = yield database_1.default.query("SELECT * FROM evento WHERE id_cliente = ?", [id_cliente]);
            if (eventos.length > 0)
                return res.json(eventos);
            res.json({ message: "No hay eventos a mostrar" });
        });
    }
    getEventsByProvider(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id_proveedor } = req.params;
            const eventos = yield database_1.default.query("SELECT * FROM evento WHERE id_proveedor = ?", [id_proveedor]);
            if (eventos.length > 0)
                res.json(eventos);
            else
                res.json({ message: "No hay eventos a mostrar" });
            res.json({ message: "Got events by provider" });
        });
    }
    updateEvent(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { id } = req.params;
                yield database_1.default.query("UPDATE evento SET ? WHERE id = ?", [req.body, id]);
                res.json({ message: "El evento ha sido actualizado" });
            }
            catch (Error) {
                res.json(Error);
            }
        });
    }
}
const eventController = new EventController();
exports.default = eventController;
