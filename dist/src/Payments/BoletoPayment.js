"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Payment_1 = __importDefault(require("./Payment"));
class BoletoPayment extends Payment_1.default {
    constructor(dueDate, params) {
        super(params);
        this._dueDate = dueDate;
    }
    pastDue() {
        return this.getPaymentDate().getTime() > this._dueDate.getTime();
    }
    finalValueCalc() {
        const value = this.getValue();
        if (this.pastDue()) {
            return value * 1.2;
        }
        return value;
    }
    makePayment() {
        const finalValue = this.finalValueCalc();
        this.getFromAccount().debit(finalValue);
        this.getToAccount().credit(finalValue);
        const transactionCode = this.generateTransactionCode();
        return transactionCode;
    }
}
exports.default = BoletoPayment;
