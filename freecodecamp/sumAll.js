/*
We'll pass you an array of two numbers. Return the sum of those two numbers plus the sum of all the numbers between them.

The lowest number will not always come first.
*/

function sumAll(arr) {
  let result = 0;

  let lowest = Math.min(arr[0], arr[1]);
  let highest = Math.max(arr[0], arr[1]);

  for (let i = lowest; i <= highest; i++) {
    result += i;
  }
  return result;
}

sumAll([1, 4]); // 10
