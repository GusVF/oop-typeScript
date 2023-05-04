export default class Cpf {
  private _value: string;

  constructor(value: string) {
    const cpfRegex = /^\d{3}\.\d{3}\.\d{3}\-\d{2}$/;
    if(!cpfRegex.test(value)) {
      throw new Error('INVALID CPF.');
    }
    this._value = value;
  }
}