"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.exercicio02 = exercicio02;
const utils_js_1 = require("../utils.js");
async function exercicio02() {
    const numero = parseInt(await (0, utils_js_1.perguntar)("Digite um número: "));
    if (isNaN(numero)) {
        console.log("Você não digitou um número válido.");
    }
    else if (numero % 2 === 0) {
        console.log(`${numero} é PAR.`);
    }
    else {
        console.log(`${numero} é ÍMPAR.`);
    }
}
