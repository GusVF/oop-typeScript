"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Cpf {
    constructor(value) {
        if (!Cpf.regex.test(value)) {
            throw new Error('INVALID CPF.');
        }
        this.value = value;
    }
}
exports.default = Cpf;
Cpf.regex = /^\d{3}\.\d{3}\.\d{3}-\d{2}$/;
