/*
What's the output of the following code:
Complexity: Medium

Fix the bug
*/

const accounts = [
  { name: 'John Doe', balance: 300 },
  { name: 'Ana Doe', balance: 500 },
  { name: 'James Smith', balance: 800 },
  { name: 'Debora Smith', balance: 100 },
];

const newAccounts = accounts.map((account) => {
  account.balance = account.balance + account.balance * 0.1;
  return account;
});

console.log(accounts[1].balance);
console.log(newAccounts[1].balance);
