/*
Numeros the Artist had two lists that were permutations of one another. He was very proud. Unfortunately, while transporting them from one exhibition to another, some numbers were lost out of the first list. Can you find the missing numbers?

Notes

If a number occurs multiple times in the lists, you must ensure that the frequency of that number in both lists is the same. If that is not the case, then it is also a missing number.
You have to print all the missing numbers in ascending order.
Print each missing number once, even if it is missing multiple times.
The difference between maximum and minimum number in the second list is less than or equal to .

*/

function missingNumbers(arr, brr) {
  let allNums = new Set(arr.concat(brr));
  let counter = {};
  let result = [];
  
  Array.from(allNums).forEach(val = > counter[val] = 0);

  for(let i = 0; i < arr.length; i++) {
    counter[arr[i]]++;
  }

  for(let j = 0; j < brr.length; j++) {
    counter[brr[j]]--;
  }

  for(let key in counter) {
    if(counter[key] !== 0) {
      result.push(key);
    }
  }

  return result;
}