import Account from '../Accounts/Account';
import crypto from 'node:crypto';

export type paymentParams = {
  fromAccount: Account;
  toAccount: Account;
  value: number;
  paymentDate: Date;
}

export default abstract class Payment {
  private _fromAccount: Account;
  private _toAccount: Account;
  private _value: number;
  private _paymentDate: Date;
  private static minimumValue: 0;

  constructor(params: paymentParams) {
    Payment.validateValue(params.value)
    this._fromAccount = params.fromAccount;
    this._toAccount = params.toAccount;
    this._value = params.value;
    this._paymentDate = params.paymentDate;
  };

private static validateValue(value: number) {
  if (value < Payment.minimumValue) {
    throw new Error('Invalid Value');
  }
}

abstract makePayment(): void;

public  getFromAccount(): Account {
    return this._fromAccount;
  }

public getToAccount(): Account {
  return this._toAccount;
}

public getValue(): number {
  return this._value;
}

public getPaymentDate(): Date {
  return this._paymentDate;
}

  protected generateTransactionCode(): string {
    // const timeStamp = Date.now(); ------ another way of doing timestamp
    // const now = new Date();
    const timeStamp = this.getPaymentDate().getTime();
    const uuid = crypto.randomUUID();
    return `${timeStamp}-${uuid}`;
  }

};