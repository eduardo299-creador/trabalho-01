import { perguntar } from "../utils.js";

export async function exercicio18() {
  const texto = await perguntar("Digite uma frase: ");
  const palavras = texto.trim().split(/\s+/);
  console.log(`Número de palavras: ${palavras.length}`);
}
