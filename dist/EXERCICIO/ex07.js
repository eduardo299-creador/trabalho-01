"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.exercicio07 = exercicio07;
async function exercicio07() {
    const numeros = [10, 23, 5, 89, 34, 56];
    const maior = Math.max(...numeros);
    console.log("Array:", numeros);
    console.log("Maior número:", maior);
}
