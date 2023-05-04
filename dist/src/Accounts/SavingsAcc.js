"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Account_1 = __importDefault(require("./Account"));
class SavingsAcc extends Account_1.default {
    constructor(clientName, cpf, interest) {
        super(clientName, 100, cpf);
        this._interest = interest;
        if (interest < 0) {
            throw new Error('Earnings must be greater than 0%');
        }
    }
    ;
    earnings() {
        return this.getBalance() * this._interest;
    }
}
exports.default = SavingsAcc;
