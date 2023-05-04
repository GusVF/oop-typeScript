import { Payables } from "../entities/Payables";
import Payment from "./Payment";

export default class DebitPayment extends Payment implements Payables{
  public makePayment(): string {
    const value = this.getValue();
    this.getFromAccount().debit(value);
    this.getToAccount().credit(value);
    const transactionCode = this.generateTransactionCode();
    return transactionCode;
  }
}