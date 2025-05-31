"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.exercicio04 = exercicio04;
const utils_js_1 = require("../utils.js");
async function exercicio04() {
    const celsius = parseFloat(await (0, utils_js_1.perguntar)("Temperatura em Celsius: "));
    const fahrenheit = (celsius * 9) / 5 + 32;
    console.log(`${celsius}°C = ${fahrenheit.toFixed(2)}°F`);
}
