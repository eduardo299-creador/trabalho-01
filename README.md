Tarefa01 - Menu de Exercícios em TypeScript

Este projeto implementa um menu interativo em Node.js com TypeScript, onde você pode escolher entre 18 exercícios diferentes que demonstram conceitos básicos de programação.

Estrutura do Projeto

/ (raiz do projeto)
├── EXERCICIO/           # Pasta com os arquivos dos exercícios
│   ├── ex01.ts
│   ├── ex02.ts
│   ├── ...
│   └── ex18.ts
├── node_modules/        # Dependências instaladas pelo NPM
├── utils.ts             # Funções utilitárias (entrada/saída)
├── index.ts             # Menu principal
├── package.json         # Metadados e scripts do NPM
├── tsconfig.json        # Configuração do compilador TypeScript
└── README.md            # Este arquivo de documentação

Pré-requisitos

Node.js (versão 14 ou superior)

npm (geralmente instalado junto com o Node)

Instalação

Clone este repositório:

https://github.com/eduardo299-creador/trabalho-01

Entre na pasta do projeto:

cd tarefa01

Instale as dependências:

npm install

Execução

Executar diretamente com ts-node

Este método permite rodar o TypeScript sem compilar manualmente:

npx ts-node index.ts

Compilar e rodar com Node.js

Inicie o TypeScript e gere os arquivos JavaScript:

npx tsc

Execute o código compilado:

node dist/index.js

Scripts úteis

No package.json estão disponíveis os seguintes scripts:

Comando

Descrição

npm start

Executa o menu (ts-node index.ts)

npm run build

Compila todo o projeto TypeScript (tsc)

Utilize npm start para iniciar o menu interativo.

Uso

Ao iniciar, você verá um menu com opções de 0 a 18:

Digite o número do exercício desejado e pressione Enter.

Após a execução, pressione Enter novamente para retornar ao menu.

Digite 0 e pressione Enter para sair.
