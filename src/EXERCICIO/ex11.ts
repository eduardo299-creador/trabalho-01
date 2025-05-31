export class Pessoa {
  constructor(public nome: string, public idade: number) {}

  exibir(): void {
    console.log(`Nome: ${this.nome}, Idade: ${this.idade}`);
  }
}

export async function exercicio11() {
  const pessoa = new Pessoa("Maria", 30);
  pessoa.exibir();
}
