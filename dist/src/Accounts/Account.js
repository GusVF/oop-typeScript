"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Cpf_1 = __importDefault(require("../entities/Cpf"));
class Account {
    constructor(clientName, deposit, cpf) {
        if (deposit < 100) {
            throw new Error('Inicial deposit needs to be at least $200');
        }
        this._name = clientName;
        this._balance = deposit;
        this._cpf = new Cpf_1.default(cpf);
    }
    ;
    // Abstract behavior
    debit(value) {
        const finalBalance = this._balance - value;
        if (finalBalance < 0) {
            throw new Error('Insuficient balance for this transaction.');
        }
        this._balance = finalBalance;
    }
    ;
    credit(value) {
        this._balance += value;
    }
    ;
    // Classic sintaxe for typeScript
    getBalance() {
        return this._balance;
    }
    ;
    setBalance(balance) {
        if (balance < 0) {
            throw new Error('Invalid Balance');
        }
        this._balance = balance;
    }
    ;
    // Modern sintaxe for typeScript
    get name() {
        return this._name;
    }
    ;
    set name(name) {
        if (name.length === 0) {
            throw new Error('Name');
        }
        this._name = name;
    }
    ;
}
exports.default = Account;
