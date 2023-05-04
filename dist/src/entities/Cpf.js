"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Cpf {
    constructor(value) {
        const cpfRegex = /^\d{3}\.\d{3}\.\d{3}\-\d{2}$/;
        if (!cpfRegex.test(value)) {
            throw new Error('INVALID CPF.');
        }
        this._value = value;
    }
}
exports.default = Cpf;
