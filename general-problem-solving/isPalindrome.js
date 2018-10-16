/* 
Check whether a string is a palindrome. Return true if it is or false if not.
*/

function isPalindrome(message) {
  let chars = message.split('');
  let startIdx = 0;
  let endIdx = chars.length - 1;

  // using two pointers, swap characters to reverse the position
  while (startIdx < endIdx) {
    let temp = chars[startIdx];
    chars[startIdx] = chars[endIdx];
    chars[endIdx] = temp;
    startIdx++;
    endIdx--;
  }

  return message === chars.join('');
}

isPalindrome('kayak'); // true
isPalindrome('tree'); // false
