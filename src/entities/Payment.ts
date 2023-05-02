import Account from './Account';

export default class Payment {
  _fromAccount: Account;
  _toAccount :Account;
  _value: number;
  _dueDate: Date;
  _paymentDate: Date;
    constructor(params: {
      fromAccount: Account,
      toAccount: Account,
      value: number,
      dueDate: Date,
      paymentDate: Date,
    }) {
     this._fromAccount = params.fromAccount;
     this._toAccount = params.toAccount;
     this._value = params.value;
     this._dueDate = params.dueDate;
     this._paymentDate = params.paymentDate;
      };

  private pastDue() {
    return this._paymentDate.getTime() > this._dueDate.getTime();
  }
  private finalValueCalc() {
    if (this.pastDue()) {
      return this._value * 1.2;
    }
    return this._value;
  }

  public makePayment() {
    const finalValue = this.finalValueCalc();
    this._fromAccount.debit(finalValue);
    this._toAccount.credit(finalValue);
  }
};