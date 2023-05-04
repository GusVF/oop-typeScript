export default class Cpf {
  private _value: string;
  private static regex = /^\d{3}\.\d{3}\.\d{3}\-\d{2}$/;

  constructor(value: string) {
    if(!Cpf.regex.test(value)) {
      throw new Error('INVALID CPF.');
    }
    this._value = value;
  }
}