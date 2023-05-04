import Payment, { paymentParams } from "./Payment";

export default class BoletoPayment extends Payment{
  private _dueDate: Date;

  constructor(dueDate: Date, params: paymentParams) {
    super(params)
    this._dueDate = dueDate;
  }

   private pastDue() {
    return this.getPaymentDate().getTime() > this._dueDate.getTime();
  }
  
  private finalValueCalc() {
    const value = this.getValue();
    if (this.pastDue()) {
      return value * 1.2;
    }
    return value;
  }

  public makePayment(): string {
    const finalValue = this.finalValueCalc();
    this.getFromAccount().debit(finalValue);
    this.getToAccount().credit(finalValue);
    const transactionCode = this.generateTransactionCode();
    return transactionCode;
  }

}