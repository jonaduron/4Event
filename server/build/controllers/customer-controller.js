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
class CustomerController {
    getCustomer(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const customers = yield database_1.default.query("SELECT * FROM usuario WHERE id = ?", [id]);
            if (customers.length > 0) {
                return res.json(customers[0]);
            }
            res.status(404).json({ message: "An error has occurred." });
        });
    }
    updateCustomer(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { id } = req.params;
                yield database_1.default.query("UPDATE usuario SET ? WHERE id = ?", [req.body, id]);
                res.json({ message: "The user has been updated" });
            }
            catch (Error) {
                res.json(Error);
            }
        });
    }
    deleteCustomer(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            yield database_1.default.query("DELETE FROM usuario WHERE id = ?", [id]);
            res.json({ message: "The user has been deleted succesfully" });
        });
    }
    updatePassword(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { user } = req.params;
            yield database_1.default.query("UPDATE usuario SET contrasena = ? WHERE usuario = ?", [req.body, user]);
            res.json({ message: "Se ha actualizado la contraseña" });
        });
    }
}
const customerController = new CustomerController();
exports.default = customerController;
