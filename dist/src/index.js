"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Account_1 = __importDefault(require("./Accounts/Account"));
const PremiumSavings_1 = __importDefault(require("./Accounts/PremiumSavings"));
const BoletoPayment_1 = __importDefault(require("./Payments/BoletoPayment"));
const DebitPayment_1 = __importDefault(require("./Payments/DebitPayment"));
const myAccount = new PremiumSavings_1.default('Gustavo', '111.111.111-11', 0.5);
const yourAccount = new Account_1.default('Mario', 2000, '222.222.222-22');
const schoolPayment = new BoletoPayment_1.default(new Date(), {
    fromAccount: yourAccount,
    toAccount: myAccount,
    value: 100,
    paymentDate: new Date('2022-01-02'),
});
const billPayment = new DebitPayment_1.default({
    fromAccount: yourAccount,
    toAccount: myAccount,
    value: 50,
    paymentDate: new Date(),
});
// const code = schoolPayment.makePayment();
// const balance = myAccount.getBalance();
// const balance2 = yourAccount.getBalance();
// console.log('your code is:', code);
// console.log('his balance is:', balance2);
// console.log('your balance is:', balance);
// const accountBalance = myAccount.getBalance();
// console.log(accountBalance,':Your beginning balance');
// const myEarnings = myAccount.earnings();
// console.log(myEarnings, ':your anual earnings');
// console.log('My balance is:', myAccount.getBalance());
// console.log('Your balance is:', yourAccount.getBalance());
// const paymentCode = billPayment.makePayment();
// console.log(paymentCode);
function paymentList(payments) {
    payments.forEach((payment) => payment.makePayment());
}
paymentList([schoolPayment, billPayment]);
console.log('My balance is:', myAccount.getBalance());
console.log('Your balance is:', yourAccount.getBalance());
