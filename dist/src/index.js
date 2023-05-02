"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Account_1 = __importDefault(require("./entities/Account"));
const Payment_1 = __importDefault(require("./entities/Payment"));
const gusAccount = new Account_1.default('Gustavo', 2000);
const yourAccount = new Account_1.default('Mario', 2000);
const netFlixPayment = new Payment_1.default({
    fromAccount: yourAccount,
    toAccount: gusAccount,
    value: 20,
    dueDate: new Date('2003/03/27'),
    paymentDate: new Date('2003/02/20'),
});
netFlixPayment.makePayment();
console.log(gusAccount);
console.log(yourAccount);
// const debit = gusAccount.debit(20)
// const credit = gusAccount.credit(500);
// console.log(gusAccount.getBalance(), gusAccount.name);
