/*
Write a function reverseWords() that takes a message as an array of characters and reverses the order of the words in place. 
*/

function reverseWords(message) {
  reverseCharacters(message, 0, message.length - 1);

  let currentWordIdx = 0;
  for (let i = 0; i <= message.length; i++) {
    if (i === message.length || message[i] === ' ') {
      reverseCharacters(message, currentWordIdx, i - 1);
      currentWordIdx = i + 1;
    }
  }
  return message;
}

// helper function
function reverseCharacters(message, leftIdx, rightIdx) {
  while (leftIdx < rightIdx) {
    let temp = message[leftIdx];
    message[leftIdx] = message[rightIdx];
    message[rightIdx] = temp;
    leftIdx++;
    rightIdx--;
  }
}

const message = [
  'c',
  'a',
  'k',
  'e',
  ' ',
  'p',
  'o',
  'u',
  'n',
  'd',
  ' ',
  's',
  't',
  'e',
  'a',
  'l'
];

reverseWords(message);

// time: O(n)
// space: O(1)
