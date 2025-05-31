"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.exercicio09 = exercicio09;
const utils_js_1 = require("../utils.js");
async function exercicio09() {
    const a = parseFloat(await (0, utils_js_1.perguntar)("Digite o primeiro número: "));
    const operador = await (0, utils_js_1.perguntar)("Digite o operador (+ - * /): ");
    const b = parseFloat(await (0, utils_js_1.perguntar)("Digite o segundo número: "));
    let resultado;
    switch (operador) {
        case "+":
            resultado = a + b;
            break;
        case "-":
            resultado = a - b;
            break;
        case "*":
            resultado = a * b;
            break;
        case "/":
            resultado = b !== 0 ? a / b : NaN;
            break;
        default:
            console.log("Operador inválido.");
            return;
    }
    console.log(`Resultado: ${resultado}`);
}
