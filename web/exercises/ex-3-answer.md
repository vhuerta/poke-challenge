Return the sum of all balances and print it to the console
Complexity: Medium

Fix the bug

```
const accounts = [
  { name: 'John Doe', balance: 300 },
  { name: 'Ana Doe', balance: 500 },
  { name: 'James Smith', balance: 800 },
  { name: 'Debora Smith', balance: 100 },
];

const result = accounts.map(account => account.balance).reduce((acc, current) => {
  return acc + current
}, 0)

console.log(result)
```
