/*
  What's the output order of the following code:
  Complexity: Easy
*/

console.log('1');

setTimeout( function () {
  console.log('2');
}, 0);

(function () {
  console.log('3');
})();

console.log('4');
