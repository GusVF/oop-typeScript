"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const SavingsAcc_1 = __importDefault(require("./SavingsAcc"));
class PremiumSavings extends SavingsAcc_1.default {
    constructor(clientName, cpf, interest) {
        super(clientName, cpf, interest);
        this.credit(900);
    }
}
exports.default = PremiumSavings;
