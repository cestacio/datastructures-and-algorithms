/*
Problem:
Given an array of strings, write a function called groupAnagrams which returns an array of arrays grouping anagrams together.

Example:
groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"])

result: 
[
  ["eat","tea","ate"],
  ["tan","nat"],
  ["bat"]
]
*/

function groupAnagrams(arr) {
  let obj = {};
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    let word = arr[i]
      .split('')
      .sort()
      .join('');

    if (obj[word]) {
      obj[word].push(arr[i]);
    } else {
      obj[word] = arr[i];
    }
  }

  for (let key in obj) {
    result.push(obj[key]);
  }

  return result;
}

// time: O(n) * O(n log n) where n is the length of the obj
// and n is the time it takes to sort each word

// space: O(n) * O(m) where n is the length of the keys in the obj
// and m is the length of the values in the objects' key -value
