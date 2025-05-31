"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.exercicio14 = exercicio14;
const utils_js_1 = require("../utils.js");
async function exercicio14() {
    const numero = parseInt(await (0, utils_js_1.perguntar)("Digite um número: "));
    for (let i = 1; i <= 10; i++) {
        console.log(`${numero} x ${i} = ${numero * i}`);
    }
}
