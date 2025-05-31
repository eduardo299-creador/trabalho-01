"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.exercicio04 = exercicio04;
const utils_ts_1 = require("../utils.ts");
function exercicio04() {
    return __awaiter(this, void 0, void 0, function* () {
        const celsius = parseFloat(yield (0, utils_ts_1.perguntar)("Temperatura em Celsius: "));
        const fahrenheit = (celsius * 9) / 5 + 32;
        console.log(`${celsius}°C = ${fahrenheit.toFixed(2)}°F`);
    });
}
