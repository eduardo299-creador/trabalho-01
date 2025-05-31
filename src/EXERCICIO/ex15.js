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
exports.exercicio15 = exercicio15;
const utils_ts_1 = require("../utils.ts");
function exercicio15() {
    return __awaiter(this, void 0, void 0, function* () {
        const peso = parseFloat(yield (0, utils_ts_1.perguntar)("Digite seu peso (kg): "));
        const altura = parseFloat(yield (0, utils_ts_1.perguntar)("Digite sua altura (m): "));
        const imc = peso / (altura * altura);
        let classificacao = "";
        if (imc < 18.5)
            classificacao = "Abaixo do peso";
        else if (imc < 25)
            classificacao = "Peso normal";
        else if (imc < 30)
            classificacao = "Sobrepeso";
        else
            classificacao = "Obesidade";
        console.log(`IMC: ${imc.toFixed(2)} - ${classificacao}`);
    });
}
