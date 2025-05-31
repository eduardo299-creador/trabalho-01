"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.exercicio16 = exercicio16;
const utils_js_1 = require("../utils.js");
async function exercicio16() {
    const senha = await (0, utils_js_1.perguntar)("Digite uma senha: ");
    const valida = senha.length >= 8 &&
        /[A-Z]/.test(senha) &&
        /[a-z]/.test(senha) &&
        /\d/.test(senha);
    if (valida) {
        console.log("Senha válida.");
    }
    else {
        console.log("Senha inválida. Deve conter ao menos:\n- 8 caracteres\n- 1 letra maiúscula\n- 1 letra minúscula\n- 1 número");
    }
}
