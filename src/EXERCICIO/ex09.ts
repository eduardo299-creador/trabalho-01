import { perguntar } from "../utils.js";

export async function exercicio09() {
  const a = parseFloat(await perguntar("Digite o primeiro número: "));
  const operador = await perguntar("Digite o operador (+ - * /): ");
  const b = parseFloat(await perguntar("Digite o segundo número: "));

  let resultado: number;

  switch (operador) {
    case "+":
      resultado = a + b;
      break;
    case "-":
      resultado = a - b;
      break;
    case "*":
      resultado = a * b;
      break;
    case "/":
      resultado = b !== 0 ? a / b : NaN;
      break;
    default:
      console.log("Operador inválido.");
      return;
  }

  console.log(`Resultado: ${resultado}`);
}
