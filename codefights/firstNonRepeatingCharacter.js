/*
Note: Write a solution that only iterates over the string once and uses O(1) additional memory, 
since this is what you would be asked to do during a real interview.

Given a string s, find and return the first instance of a non-repeating 
character in it. If there is no such character, return '_'.

s = "abacabad"
firstNotRepeatingCharacter(s) // 'c'

s = "abacabaabacaba"
firstNotRepeatingCharacter(s) = '_'
*/

function firstNonRepeatingCharacter(s) {
  for (let i = 0; i < s.length; i++) {
    let char = s.charAt(i);
    if (s.indexOf(char) === i && s.indexOf(char, i + 1) === -1) {
      return char;
    }
  }
  return '_';
}
