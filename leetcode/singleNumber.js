/*
Given a non-empty array of integers, every element appears twice except for one. Find that single one.
*/

var singleNumber = function(nums) {
  let pairs = {};

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] in pairs) {
      pairs[nums[i]] += 1;
    } else {
      pairs[nums[i]] = 0;
    }
  }

  for (let key in pairs) {
    if (pairs[key] === 0) {
      return key;
    }
  }
};
