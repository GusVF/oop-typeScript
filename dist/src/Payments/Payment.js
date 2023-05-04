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
        this._paymentDate = params.paymentDate;
    }
    ;
    getFromAccount() {
        return this._fromAccount;
    }
    getToAccount() {
        return this._toAccount;
    }
    getValue() {
        return this._value;
    }
    getPaymentDate() {
        return this._paymentDate;
    }
    generateTransactionCode() {
        // const timeStamp = Date.now(); ------ another way of doing timestamp
        const now = new Date();
        const timeStamp = this.getPaymentDate().getTime();
        const uuid = node_crypto_1.default.randomUUID();
        return `${timeStamp}-${uuid}`;
    }
}
exports.default = Payment;
;
