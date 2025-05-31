import * as readline from "readline";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

export function perguntar(pergunta: string): Promise<string> {
  return new Promise((resolve) => {
    rl.question(pergunta, (resposta: string) => resolve(resposta));
  });
}

export function pausar(): Promise<void> {
  return perguntar("\nPressione Enter para voltar ao menu...").then(() => {});
}

export function fechar(): void {
  rl.close();
}
