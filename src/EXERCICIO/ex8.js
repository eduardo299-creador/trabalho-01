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
exports.exercicio08 = exercicio08;
const utils_ts_1 = require("../utils.ts");
function exercicio08() {
    return __awaiter(this, void 0, void 0, function* () {
        const texto = (yield (0, utils_ts_1.perguntar)("Digite uma frase: ")).toLowerCase();
        const vogais = texto.match(/[aeiou]/g);
        console.log(`Número de vogais: ${vogais ? vogais.length : 0}`);
    });
}
