import { perguntar } from "../utils.js";

export async function exercicio03() {
  const n1 = parseFloat(await perguntar("Nota 1: "));
  const n2 = parseFloat(await perguntar("Nota 2: "));
  const n3 = parseFloat(await perguntar("Nota 3: "));
  const media = (n1 + n2 + n3) / 3;
  console.log(`Média: ${media.toFixed(2)}`);
}
