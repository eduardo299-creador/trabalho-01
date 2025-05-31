"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Pessoa = void 0;
exports.exercicio11 = exercicio11;
class Pessoa {
    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }
    exibir() {
        console.log(`Nome: ${this.nome}, Idade: ${this.idade}`);
    }
}
exports.Pessoa = Pessoa;
async function exercicio11() {
    const pessoa = new Pessoa("Maria", 30);
    pessoa.exibir();
}
