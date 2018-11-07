/*
Given a non-empty array of integers, return the k most frequent elements.

example:
Input: nums = [1,1,1,2,2,3], k = 2
Output: [1,2]
*/

var topKFrequent = function(nums, k) {
  var result = [];
  var count = {};
  var final = [];

  // store each value in a counter object
  nums.forEach(val => {
    if (!count[val]) {
      count[val] = 1;
    } else {
      count[val]++;
    }
  });

  // add each of the object's keys and values to an array
  for (var key in count) {
    result.push({ key: key, value: count[key] });
  }

  // sort the array by the value. this will give us the keys with the highest values
  // at the beginning of the array
  result.sort((a, b) => b.value - a.value);

  // looping up until k, push the keys to a final arr
  for (let j = 0; j < k; j++) {
    final.push(+result[j].key);
  }
  return final;
};
