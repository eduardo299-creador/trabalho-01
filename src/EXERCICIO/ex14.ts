import { perguntar } from "../utils.js";

export async function exercicio14() {
  const numero = parseInt(await perguntar("Digite um número: "));
  for (let i = 1; i <= 10; i++) {
    console.log(`${numero} x ${i} = ${numero * i}`);
  }
}
