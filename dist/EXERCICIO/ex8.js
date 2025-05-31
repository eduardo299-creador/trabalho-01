"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.exercicio08 = exercicio08;
const utils_js_1 = require("../utils.js");
async function exercicio08() {
    const texto = (await (0, utils_js_1.perguntar)("Digite uma frase: ")).toLowerCase();
    const vogais = texto.match(/[aeiou]/g);
    console.log(`Número de vogais: ${vogais ? vogais.length : 0}`);
}
