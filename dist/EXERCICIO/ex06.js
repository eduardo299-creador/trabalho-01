"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.exercicio06 = exercicio06;
const utils_js_1 = require("../utils.js");
async function exercicio06() {
    const numeros = [];
    for (let i = 0; i < 5; i++) {
        const num = parseFloat(await (0, utils_js_1.perguntar)(`Digite o ${i + 1}º número: `));
        numeros.push(num);
    }
    console.log("Números digitados:", numeros);
}
