What's the output order of the following code:

```
console.log('1');

setTimeout( function () {
  console.log('2');
}, 0);

(function () {
  console.log('3');
})();

console.log('4');
```

Answer:

```
1
3
4
2
```
