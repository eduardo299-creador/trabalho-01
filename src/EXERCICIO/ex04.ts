import { perguntar } from "../utils.js";

export async function exercicio04() {
  const celsius = parseFloat(await perguntar("Temperatura em Celsius: "));
  const fahrenheit = (celsius * 9) / 5 + 32;
  console.log(`${celsius}°C = ${fahrenheit.toFixed(2)}°F`);
}
