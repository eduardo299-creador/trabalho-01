"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.exercicio18 = exercicio18;
const utils_ts_1 = require("../utils.ts");
function exercicio18() {
    return __awaiter(this, void 0, void 0, function* () {
        const texto = yield (0, utils_ts_1.perguntar)("Digite uma frase: ");
        const palavras = texto.trim().split(/\s+/);
        console.log(`Número de palavras: ${palavras.length}`);
    });
}
