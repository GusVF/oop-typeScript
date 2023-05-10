import Cpf from '../entities/Cpf';

export type AccountParams = {
  clientName: string,
  deposit: number,
  cpf: string,
  id: number,
} 
export default class Account {
  private _balance: number;
  private _name: string;
  private _cpf: Cpf;
  private static _minimumDeposit: 100;
  private _id: number;

  constructor(params: AccountParams) {
    Account.validateDeposit(params.deposit);
    this._name = params.clientName;
    this._balance = params.deposit;
    this._cpf = new Cpf(params.cpf);
    this._id = params.id;
  }

  public static validateDeposit(deposit: number): void {
    if (deposit < Account._minimumDeposit) {
      throw new Error('Inicial deposit needs to be at least $200');
    }
  }

  // Abstract behavior
  public debit(value: number): void {
    const finalBalance = this._balance - value;
    if (finalBalance < 0) {
      throw new Error('Insuficient balance for this transaction.');
    }
    this._balance = finalBalance;
  }

  public credit(value: number) {
    this._balance += value;
  }

  // Classic sintaxe for typeScript
  public getBalance(): number {
    return this._balance;
  }

  public setBalance(balance: number) {
    if (balance < 0) {
      throw new Error('Invalid Balance');
    }
    this._balance = balance;
  }

  // Modern sintaxe for typeScript
  public get name(): string {
    return this._name;
  }

  public set name(name: string) {
    if (name.length === 0) {
      throw new Error('Name');
    }
    this._name = name;
  }
}
