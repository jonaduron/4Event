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
class IndexController {
    login(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { usuario } = req.params;
            const valores = yield database_1.default.query('SELECT esProveedor,contrasena FROM usuario WHERE usuario = ?', [usuario]);
            // if(valores[0] == req.params.usuario && valores[1] == req.params.contrasena) {
            //     return true;
            // }
            // else {
            //     return false;
            // }
            res.json(valores);
        });
    }
    createCustomer(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield database_1.default.query("INSERT INTO usuario set ?", [req.body]);
            res.json({ message: 'El usuario ha sido agregado' });
        });
    }
}
exports.indexController = new IndexController();
