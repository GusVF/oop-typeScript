import Account, { AccountParams } from "./Account";

export default class CheckingAccount extends Account {
  private _limit: number;
  constructor(limit: number, params: AccountParams) {
    super(params);
    this._limit = limit;
  }
}