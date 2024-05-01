class BankAccount {
  constructor(id, amount) {
    this.id = id;
    this.amount = amount;
  }
  withdraw(value) {
    this.amount -= value;
    return this.amount;
  }
}
const myAccount = new BankAccount("1FG", 200);
myAccount.withdraw(20);
console.log(myAccount.amount);
