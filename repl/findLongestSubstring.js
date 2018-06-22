/*
Write a function called findLongestSubstring, which accepts a 
string and returns the length of the longest substring with all distinct characters.
Time complexity: O(n)

side note: sliding window technique - specialization of two pointers

*/

function findLongestSubstring(str) {
  let seen = {};
  let longest = 0;
  let start = 0;

  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    if (seen[char]) {
      start = Math.max(start, seen[char]);
    }
    longest = Math.max(longest, i - start + 1);
    seen[char] = i + 1;
  }
  return longest;
}

// findLongestSubstring('thisisawesome') // 6
// findLongestSubstring('thecatinthehat') // 7
// findLongestSubstring('bbbbbb') // 1
