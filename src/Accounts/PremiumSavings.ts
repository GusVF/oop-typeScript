import SavingsAcc from "./SavingsAcc";

export default class PremiumSavings extends SavingsAcc {
  constructor(clientName: string, cpf: string, interest: number) {
    super(clientName, cpf, interest)
    this.credit(900);
  }
}