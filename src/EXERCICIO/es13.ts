interface Veiculo {
  acelerar(): void;
  frear(): void;
}

class Carro implements Veiculo {
  acelerar(): void {
    console.log("O carro está acelerando.");
  }

  frear(): void {
    console.log("O carro está freando.");
  }
}

export async function exercicio13() {
  const carro = new Carro();
  carro.acelerar();
  carro.frear();
}
