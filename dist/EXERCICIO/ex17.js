"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.exercicio17 = exercicio17;
const utils_js_1 = require("../utils.js");
async function exercicio17() {
    const numeroSecreto = Math.floor(Math.random() * 100) + 1;
    let tentativa;
    console.log("Tente adivinhar o número entre 1 e 100.");
    do {
        tentativa = parseInt(await (0, utils_js_1.perguntar)("Digite sua tentativa: "));
        if (tentativa < numeroSecreto) {
            console.log("É maior.");
        }
        else if (tentativa > numeroSecreto) {
            console.log("É menor.");
        }
        else {
            console.log("Parabéns! Você acertou!");
        }
    } while (tentativa !== numeroSecreto);
}
