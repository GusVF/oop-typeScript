"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const node_crypto_1 = __importDefault(require("node:crypto"));
class Payment {
    constructor(params) {
        this._fromAccount = params.fromAccount;
        this._toAccount = params.toAccount;
        this._value = params.value;
        this._dueDate = params.dueDate;
        this._paymentDate = params.paymentDate;
    }
    ;
    pastDue() {
        return this._paymentDate.getTime() > this._dueDate.getTime();
    }
    finalValueCalc() {
        if (this.pastDue()) {
            return this._value * 1.2;
        }
        return this._value;
    }
    makePayment() {
        const finalValue = this.finalValueCalc();
        this._fromAccount.debit(finalValue);
        this._toAccount.credit(finalValue);
        const transactionCode = this.generateTransactionCode();
        return transactionCode;
    }
    generateTransactionCode() {
        // const timeStamp = Date.now(); ------ one way of doing timestamp
        const now = new Date();
        const timeStamp = this._paymentDate.getTime();
        const uuid = node_crypto_1.default.randomUUID();
        return `${timeStamp}-${uuid}`;
    }
}
exports.default = Payment;
;
