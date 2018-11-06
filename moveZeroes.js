/*
Given an array nums, write a function to move all 0's to the end of it while maintaining the relative order of the non-zero elements.

example:
Input: [0,1,0,3,12]
Output: [1,3,12,0,0]
*/

var moveZeroes = function(nums) {
  let index = 0;

  // loop through the nums array
  // if the value isn't 0, update its position by incrementing the index;
  for (let i = 0; i < nums.length; i++) {
    let val = nums[i];
    if (val !== 0) {
      nums[index++] = val;
    }
  }

  // loop through nums array starting from the index;
  // update the value to 0 and increment the count;
  while (index < nums.length) {
    nums[index] = 0;
    index++;
  }
};
