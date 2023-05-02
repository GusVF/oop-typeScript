"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
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
    }
}
exports.default = Payment;
;
