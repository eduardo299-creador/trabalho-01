import { perguntar } from "../utils.js";

export async function exercicio08() {
  const texto = (await perguntar("Digite uma frase: ")).toLowerCase();
  const vogais = texto.match(/[aeiou]/g);
  console.log(`Número de vogais: ${vogais ? vogais.length : 0}`);
}
