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
class PacketController {
    getPacket(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const packet = yield database_1.default.query("SELECT * FROM paquete WHERE id = ?", [id]);
            res.json(packet);
        });
    }
    getPacketsByProvider(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id_proveedor } = req.params;
            const paquetes = yield database_1.default.query("SELECT * FROM paquete WHERE id_proveedor = ?", [id_proveedor]);
            if (paquetes.length > 0) {
                res.json(paquetes);
            }
            else
                res.json({ message: "Hubo un pedo al seleccionar los paquetes de este proveedor" });
        });
    }
    createPacket(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield database_1.default.query("INSERT INTO paquete SET ?", [req.body]);
            res.json({ message: "El paquete ha sido creado" });
        });
    }
    deletePacket(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            database_1.default.query("DELETE FROM paquete WHERE id = ?", [id]);
            res.json({ message: "El paquete ha sido eliminado" });
        });
    }
    updatePacket(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            database_1.default.query("UPDATE paquete SET ? WHERE id = ?", [req.body, id]);
            res.json({ message: "El paquete ha sido actualizado" });
        });
    }
}
const packetController = new PacketController();
exports.default = packetController;
