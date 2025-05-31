import { perguntar } from "../utils.js";

export async function exercicio17() {
  const numeroSecreto = Math.floor(Math.random() * 100) + 1;
  let tentativa: number;

  console.log("Tente adivinhar o número entre 1 e 100.");

  do {
    tentativa = parseInt(await perguntar("Digite sua tentativa: "));

    if (tentativa < numeroSecreto) {
      console.log("É maior.");
    } else if (tentativa > numeroSecreto) {
      console.log("É menor.");
    } else {
      console.log("Parabéns! Você acertou!");
    }
  } while (tentativa !== numeroSecreto);
}
