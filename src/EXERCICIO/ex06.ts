import { perguntar } from "../utils.js";

export async function exercicio06() {
  const numeros: number[] = [];

  for (let i = 0; i < 5; i++) {
    const num = parseFloat(await perguntar(`Digite o ${i + 1}º número: `));
    numeros.push(num);
  }

  console.log("Números digitados:", numeros);
}
