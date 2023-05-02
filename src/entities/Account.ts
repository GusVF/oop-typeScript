export default class Account {
  private _balance: number;
  private _name: string;

  constructor(clientName: string, deposit: number) {
    if(deposit < 200) {
      throw new Error('Inicial deposit needs to be at least $200');
    }
    this._name = clientName;
    this._balance = deposit;
  };
// Abstract behavior
  public debit(value: number) {
    const finalBalance = this._balance - value;
    if (finalBalance < 0) {
      throw new Error('Insuficient balance for this transaction.')
    }
    this._balance = finalBalance;
  };

  public credit(value: number) {
    this._balance += value;
  };

// Classic sintaxe for typeScript
  public  getBalance(): number {
      return this._balance;
  };

  public setBalance(balance: number) {
    if(balance < 0) {
      throw new Error('Invalid Balance')
    }
      this._balance = balance;
  };
// Modern sintaxe for typeScript
  public  get name(): string {
      return this._name;
    };

  public set name(name: string) {
    if(name.length === 0) {
      throw new Error('Name')
    }
    this._name = name;
  };

}
