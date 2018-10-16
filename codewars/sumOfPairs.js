/*
Given a list of integers and a single sum value, return the first two values (parse from the left please) in order of appearance that add up to form the sum.
*/

function sumOfPairs(arr, num) {
  let seenValues = new Set();

  for (let val of arr) {
    if (seenValues.has(num - val)) {
      return [num - val, val];
    }
    seenValues.add(val);
  }
}

let arr = [10, 5, 2, 3, 7, 5]; // [3, 7]
let num = 10;

sumOfPairs(arr, num);
