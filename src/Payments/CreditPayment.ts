import Payment from "./Payment";

export default class CreditPayment extends Payment {
  makePayment(): void {
    throw new Error("Method not implemented.");
  }
  
}