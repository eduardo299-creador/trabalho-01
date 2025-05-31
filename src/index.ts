import { exercicio13 } from "./EXERCICIO/es13.js";
import exercicio01 from "./EXERCICIO/ex01.ts.js";
import { exercicio02 } from "./EXERCICIO/ex02.ts.js";
import { exercicio03 } from "./EXERCICIO/ex03.js";
import { exercicio04 } from "./EXERCICIO/ex04.js";
import { exercicio05 } from "./EXERCICIO/ex05.js";
import { exercicio06 } from "./EXERCICIO/ex06.js";
import { exercicio07 } from "./EXERCICIO/ex07.js";
import { exercicio09 } from "./EXERCICIO/ex09.js";
import { exercicio10 } from "./EXERCICIO/ex10.js";
import { exercicio11 } from "./EXERCICIO/ex11.js";
import { exercicio12 } from "./EXERCICIO/ex12.js";
import { exercicio14 } from "./EXERCICIO/ex14.js";
import { exercicio15 } from "./EXERCICIO/ex15.js";
import { exercicio16 } from "./EXERCICIO/ex16.js";
import { exercicio17 } from "./EXERCICIO/ex17.js";
import { exercicio18 } from "./EXERCICIO/ex18.js";
import { exercicio08 } from "./EXERCICIO/ex8.js";
import { perguntar, fechar } from "./utils.js";

// Importações dos exercícios

async function menu() {
  let opcao;

  do {
    console.clear();
    console.log(`
      ========= MENU DE EXERCÍCIOS =========
      0 - Sair
      1 - Soma de dois números
      2 - Verificar se número é par ou ímpar
      3 - Calcular média de três notas
      4 - Converter Celsius para Fahrenheit
      5 - Exibir números pares de 1 a 20
      6 - Ler 5 números e exibir
      7 - Encontrar maior número do array
      8 - Contar vogais em uma string
      9 - Calculadora (+ - * /)
      10 - Ordenar array em ordem crescente
      11 - Classe Pessoa (nome, idade)
      12 - Classe Aluno herda Pessoa
      13 - Interface Veiculo → classe Carro
      14 - Tabuada de 1 a 10
      15 - Calculadora de IMC
      16 - Validador de senha
      17 - Jogo de adivinhação
      18 - Contar palavras em uma string
      ======================================
    `);

    const resposta = await perguntar("Escolha uma opção (0-18): ");
    // 2) Conversão única para número, base 10
    opcao = parseInt(resposta, 10); // ou: opcao = +resposta;

    switch (opcao) {
      case 0:
        console.log("Saindo...");
        fechar();
        break;
      case 1:
        await exercicio01();
        break;
      case 2:
        await exercicio02();
        break;
      case 3:
        await exercicio03();
        break;
      case 4:
        await exercicio04();
        break;
      case 5:
        await exercicio05();
        break;
      case 6:
        await exercicio06();
        break;
      case 7:
        await exercicio07();
        break;
      case 8:
        await exercicio08();
        break;
      case 9:
        await exercicio09();
        break;
      case 10:
        await exercicio10();
        break;
      case 11:
        await exercicio11();
        break;
      case 12:
        await exercicio12();
        break;
      case 13:
        await exercicio13();
        break;
      case 14:
        await exercicio14();
        break;
      case 15:
        await exercicio15();
        break;
      case 16:
        await exercicio16();
        break;
      case 17:
        await exercicio17();
        break;
      case 18:
        await exercicio18();
        break;
      default:
        console.log("❌ Opção inválida.");
    }

    if (opcao !== 0) {
      await perguntar("\nPressione Enter para continuar...");
    }
  } while (opcao !== 0);
}

menu();
