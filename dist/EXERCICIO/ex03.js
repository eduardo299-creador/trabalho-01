"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.exercicio03 = exercicio03;
const utils_js_1 = require("../utils.js");
async function exercicio03() {
    const n1 = parseFloat(await (0, utils_js_1.perguntar)("Nota 1: "));
    const n2 = parseFloat(await (0, utils_js_1.perguntar)("Nota 2: "));
    const n3 = parseFloat(await (0, utils_js_1.perguntar)("Nota 3: "));
    const media = (n1 + n2 + n3) / 3;
    console.log(`Média: ${media.toFixed(2)}`);
}
