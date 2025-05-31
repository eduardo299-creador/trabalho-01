"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const es13_js_1 = require("./EXERCICIO/es13.js");
const ex01_ts_js_1 = __importDefault(require("./EXERCICIO/ex01.ts.js"));
const ex02_ts_js_1 = require("./EXERCICIO/ex02.ts.js");
const ex03_js_1 = require("./EXERCICIO/ex03.js");
const ex04_js_1 = require("./EXERCICIO/ex04.js");
const ex05_js_1 = require("./EXERCICIO/ex05.js");
const ex06_js_1 = require("./EXERCICIO/ex06.js");
const ex07_js_1 = require("./EXERCICIO/ex07.js");
const ex09_js_1 = require("./EXERCICIO/ex09.js");
const ex10_js_1 = require("./EXERCICIO/ex10.js");
const ex11_js_1 = require("./EXERCICIO/ex11.js");
const ex12_js_1 = require("./EXERCICIO/ex12.js");
const ex14_js_1 = require("./EXERCICIO/ex14.js");
const ex15_js_1 = require("./EXERCICIO/ex15.js");
const ex16_js_1 = require("./EXERCICIO/ex16.js");
const ex17_js_1 = require("./EXERCICIO/ex17.js");
const ex18_js_1 = require("./EXERCICIO/ex18.js");
const ex8_js_1 = require("./EXERCICIO/ex8.js");
const utils_js_1 = require("./utils.js");
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
        const resposta = await (0, utils_js_1.perguntar)("Escolha uma opção (0-18): ");
        // 2) Conversão única para número, base 10
        opcao = parseInt(resposta, 10); // ou: opcao = +resposta;
        switch (opcao) {
            case 0:
                console.log("Saindo...");
                (0, utils_js_1.fechar)();
                break;
            case 1:
                await (0, ex01_ts_js_1.default)();
                break;
            case 2:
                await (0, ex02_ts_js_1.exercicio02)();
                break;
            case 3:
                await (0, ex03_js_1.exercicio03)();
                break;
            case 4:
                await (0, ex04_js_1.exercicio04)();
                break;
            case 5:
                await (0, ex05_js_1.exercicio05)();
                break;
            case 6:
                await (0, ex06_js_1.exercicio06)();
                break;
            case 7:
                await (0, ex07_js_1.exercicio07)();
                break;
            case 8:
                await (0, ex8_js_1.exercicio08)();
                break;
            case 9:
                await (0, ex09_js_1.exercicio09)();
                break;
            case 10:
                await (0, ex10_js_1.exercicio10)();
                break;
            case 11:
                await (0, ex11_js_1.exercicio11)();
                break;
            case 12:
                await (0, ex12_js_1.exercicio12)();
                break;
            case 13:
                await (0, es13_js_1.exercicio13)();
                break;
            case 14:
                await (0, ex14_js_1.exercicio14)();
                break;
            case 15:
                await (0, ex15_js_1.exercicio15)();
                break;
            case 16:
                await (0, ex16_js_1.exercicio16)();
                break;
            case 17:
                await (0, ex17_js_1.exercicio17)();
                break;
            case 18:
                await (0, ex18_js_1.exercicio18)();
                break;
            default:
                console.log("❌ Opção inválida.");
        }
        if (opcao !== 0) {
            await (0, utils_js_1.perguntar)("\nPressione Enter para continuar...");
        }
    } while (opcao !== 0);
}
menu();
