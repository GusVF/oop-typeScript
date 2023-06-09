"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Account {
    constructor(clientName, deposit, cpf) {
        if (deposit < 200) {
            throw new Error('Inicial deposit needs to be at least $200');
        }
        const cpfRegex = /^\d{3}\.\d{3}\.\d{3}\-\d{2}$/;
        if (!cpfRegex.test(cpf)) {
            throw new Error('INVALID CPF.');
        }
        this._name = clientName;
        this._balance = deposit;
        this._cpf = cpf;
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
