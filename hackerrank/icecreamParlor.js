/*
Sunny and Johnny like to pool their money and go to the ice cream parlor. Johnny never buys the same flavor that Sunny does. The only other rule they have is that they spend all of their money.

Given a list of prices for the flavors of ice cream, select the two that will cost all of the money they have.

Complete the function icecreamParlor below to return an array containing the indexes of the prices of the two flavors they buy. The returned array must be sorted ascending.
*/

function icecreamParlor(m, arr) {
  let result = [];
  let j = arr.length - 1;

  for (let i = 0; i < arr.length; i++) {
    while (j > i) {
      if (arr[i] + arr[j] === m) {
        result.push(i + 1, j + 1);
      }
      j--;
    }
  }
  return result;
}

// fails last two test cases
