/*
Given a string containing just the characters '(',  ')', '{', '}', '[' and ']', write a function called validParens to determine if the input string is valid.

An input string is valid if:
- Open brackets must be closed by the same type of brackets.
- Open brackets must be closed in the correct order.

Note that an empty string is also considered valid.
*/

function validParens(str) {
  if (str.length % 2 !== 0) return false;

  const stack = [];

  const pairs = {
    '(': ')',
    '{': '}',
    '[': ']'
  };

  for (let char of str) {
    if (char in pairs) {
      stack.push(pairs[char]);
    } else if (stack.pop() !== char) {
      return false;
    }
  }
  return stack.length === 0;
}

// validParens(''); // true
// validParens('()'); // true
validParens('()[]{}'); // true
// validParens('(]'); // false
// validParens('([)]'); // false
// validParens('{[]}'); // true
