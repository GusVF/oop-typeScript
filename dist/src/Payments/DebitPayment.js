"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Payment_1 = __importDefault(require("./Payment"));
class DebitPayment extends Payment_1.default {
    makePayment() {
        const value = this.getValue();
        this.getFromAccount().debit(value);
        this.getToAccount().credit(value);
        const transactionCode = this.generateTransactionCode();
        return transactionCode;
    }
}
exports.default = DebitPayment;
