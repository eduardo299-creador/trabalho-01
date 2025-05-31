import * as readline from "readline";

// Interface de entrada e saída padrão
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Função auxiliar para perguntar ao usuário
function perguntar(pergunta: string): Promise<number> {
  return new Promise((resolve) => {
    rl.question(pergunta, (resposta) => {
      const numero = parseInt(resposta);
      resolve(numero);
    });
  });
}

// Função exportada para ser usada no menu principal
async function exercicio01() {
  const num1 = await perguntar("Digite o primeiro número inteiro: ");
  const num2 = await perguntar("Digite o segundo número inteiro: ");
  const soma = num1 + num2;
  console.log(`A soma de ${num1} + ${num2} é: ${soma}`);
  rl.close();
}

export default exercicio01;
