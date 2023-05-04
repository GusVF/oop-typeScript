"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Payment_1 = __importDefault(require("./Payment"));
class PixPayment extends Payment_1.default {
    constructor(pixKey, params) {
        super(params);
        this._pixKey = pixKey;
    }
    makePayment() {
        const value = this.getValue();
        this.getFromAccount().debit(value);
        this.getToAccount().credit(value);
        const transactionCode = this.generateTransactionCode();
        return transactionCode;
    }
    generateTransactionCode() {
        const initialTransacitonCode = super.generateTransactionCode();
        return `${initialTransacitonCode}-${this._pixKey}`;
    }
}
exports.default = PixPayment;
