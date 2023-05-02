import Account from './entities/Account';
import Payment from './entities/Payment';

const gusAccount = new Account('Gustavo', 2000);
const yourAccount = new Account('Mario', 2000);

const netFlixPayment = new Payment({
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
