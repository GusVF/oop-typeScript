import Account from './Accounts/Account';
import PremiumSavings from './Accounts/PremiumSavings';
import SavingsAcc from './Accounts/SavingsAcc';
import BoletoPayment from './Payments/BoletoPayment';
import Payment from './Payments/Payment';


const myAccount = new PremiumSavings('Gustavo', '111.111.111-11', 0.5);
const yourAccount = new Account('Mario', 2000, '222.222.222-22');


const payment = new BoletoPayment(
  new Date(), {
  fromAccount: yourAccount,
  toAccount: myAccount,
  value: 100,
  paymentDate: new Date('2022-01-02'),
});
// const code = payment.makePayment();
const code = payment.makePayment();
const balance = myAccount.getBalance();
const balance2 = yourAccount.getBalance();
console.log('your code is:', code);
console.log('his balance is:', balance2);
console.log('your balance is:', balance);
// const accountBalance = myAccount.getBalance();
// console.log(accountBalance,':Your beginning balance');
// const myEarnings = myAccount.earnings();
// console.log(myEarnings, ':your anual earnings');
