/*
Given a sorted array arr of distinct integers, write a function indexEqualsValueSearch that returns the lowest index i for which arr[i] == i. Return -1 if there is no such index. Analyze the time and space complexities of your solution and explain its correctness.
*/

function indexEqualsValueSearch(arr) {
  let start = 0;
  let end = arr.length - 1;

  while (start <= end) {
    var idx = Math.round((start + end) / 2);

    if (arr[idx] - idx < 0) {
      start = idx + 1;
    } else if (
      arr[idx] - idx === 0 &&
      (idx === 0 || arr[idx - 1] - (idx - 1) < 0)
    ) {
      return idx;
    } else {
      end = idx - 1;
    }
  }
  return -1;
}

let arr1 = [-8, 0, 2, 5];
let arr2 = [-1, 0, 3, 6];

indexEqualsValueSearch(arr1); // 2 since arr[2] === 2
indexEqualsValueSearch(arr2); // -1 since no index in arr2 satisfies arr[i] === i

// time complexity: O(log(N)) - we're using binary search where the input size is reduced in half on each step.

// space complexity: O(1) - we're only at constant amount of memory
