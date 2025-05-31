"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.exercicio15 = exercicio15;
const utils_js_1 = require("../utils.js");
async function exercicio15() {
    const peso = parseFloat(await (0, utils_js_1.perguntar)("Digite seu peso (kg): "));
    const altura = parseFloat(await (0, utils_js_1.perguntar)("Digite sua altura (m): "));
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
}
