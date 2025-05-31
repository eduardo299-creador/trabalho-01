import { perguntar } from "../utils.js";

export async function exercicio02() {
  const numero = parseInt(await perguntar("Digite um número: "));

  if (isNaN(numero)) {
    console.log("Você não digitou um número válido.");
  } else if (numero % 2 === 0) {
    console.log(`${numero} é PAR.`);
  } else {
    console.log(`${numero} é ÍMPAR.`);
  }
}
