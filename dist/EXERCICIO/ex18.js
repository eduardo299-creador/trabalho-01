"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.exercicio18 = exercicio18;
const utils_js_1 = require("../utils.js");
async function exercicio18() {
    const texto = await (0, utils_js_1.perguntar)("Digite uma frase: ");
    const palavras = texto.trim().split(/\s+/);
    console.log(`Número de palavras: ${palavras.length}`);
}
