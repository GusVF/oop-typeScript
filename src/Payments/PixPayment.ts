import Payment, { paymentParams } from "./Payment";


export default class PixPayment extends Payment  {
  private _pixKey: string;

    constructor(pixKey: string, params: paymentParams) {
      super(params)
      this._pixKey = pixKey;
    }

    public makePayment(): string {
      const value = this.getValue();
      this.getFromAccount().debit(value);
      this.getToAccount().credit(value);
      const transactionCode = this.generateTransactionCode();
      return transactionCode;
    }
      
    protected generateTransactionCode(): string {
    const initialTransacitonCode = super.generateTransactionCode();
    return `${initialTransacitonCode}-${this._pixKey}`;
    }
}