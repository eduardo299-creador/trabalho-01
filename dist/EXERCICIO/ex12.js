"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.exercicio12 = exercicio12;
class Pessoa {
    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }
}
class Aluno extends Pessoa {
    constructor(nome, idade, matricula) {
        super(nome, idade);
        this.matricula = matricula;
    }
    exibir() {
        console.log(`Nome: ${this.nome}, Idade: ${this.idade}, Matrícula: ${this.matricula}`);
    }
}
async function exercicio12() {
    const aluno = new Aluno("João", 21, "2025001");
    aluno.exibir();
}
