"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.exercicio10 = exercicio10;
async function exercicio10() {
    const numeros = [42, 12, 5, 89, 22];
    numeros.sort((a, b) => a - b);
    console.log("Array ordenado:", numeros);
}
