/*
isAnagram takes in a string and a target. Return true if the target is an anagram of the string, otherwise return false. 

in short, this function takes in two strings and checks to see if they are anagrams of each other.
*/

// solution #1
// time: O(n) - constant time where n is the length of the string and target

let isAnagram = (string, target) => {
  let charObj = {};

  for (let i = 0; i < string.length; i++) {
    if (string[i] in charObj) {
      charObj[string[i]]++;
    } else {
      charObj[string[i]] = 1;
    }
  }

  for (let j = 0; j < target.length; j++) {
    if (target[j] in charObj) {
      charObj[target[j]]--;
    } else {
      return false;
    }
  }

  for (let key in charObj) {
    if (charObj[key]) {
      return false;
    }
  }

  return true;
};

isAnagram('cat', 'tac');

// solution #2
// time: O(n logn)

let isAnagram2 = (str, target) => {
  str = str
    .split('')
    .sort()
    .join('');
  target = target
    .split('')
    .sort()
    .join('');
  return str === target;
};

isAnagram2('kayak', 'aakky');
