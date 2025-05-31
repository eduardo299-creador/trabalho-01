class Pessoa {
  constructor(public nome: string, public idade: number) {}
}

class Aluno extends Pessoa {
  constructor(nome: string, idade: number, public matricula: string) {
    super(nome, idade);
  }

  exibir(): void {
    console.log(`Nome: ${this.nome}, Idade: ${this.idade}, Matrícula: ${this.matricula}`);
  }
}

export async function exercicio12() {
  const aluno = new Aluno("João", 21, "2025001");
  aluno.exibir();
}
