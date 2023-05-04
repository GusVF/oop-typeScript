import Account from "./Account"

export default class SavingsAcc extends Account {
  private _interest: number;

  constructor(clientName: string, cpf: string, interest: number) {
    super(clientName, 100, cpf);

    this._interest = interest;
    if(interest < 0 ) {
      throw new Error('Earnings must be greater than 0%');
    }
  };

  earnings(): number {
    return this.getBalance() * this._interest;
  }
}
