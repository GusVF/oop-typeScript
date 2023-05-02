"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Conta {
    constructor(nomeDoCliente, deposito) {
        if (deposito < 200) {
            throw new Error('Deposito minimo dever ser $200');
        }
        this._nome = nomeDoCliente;
        this._saldo = deposito;
    }
    getSaldo() {
        return this._saldo;
    }
}
exports.default = Conta;
