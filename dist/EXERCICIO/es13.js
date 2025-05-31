"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.exercicio13 = exercicio13;
class Carro {
    acelerar() {
        console.log("O carro está acelerando.");
    }
    frear() {
        console.log("O carro está freando.");
    }
}
async function exercicio13() {
    const carro = new Carro();
    carro.acelerar();
    carro.frear();
}
