/*
Write a function that takes a string as input and returns the string reversed.

*/

let reverseString = function(s) {
  let str = s.split('');
  let start = 0;
  let end = s.length - 1;
  while (start < end) {
    let temp = str[start];
    str[start] = str[end];
    str[end] = temp;
    start++;
    end--;
  }
  return str.join('');
};
