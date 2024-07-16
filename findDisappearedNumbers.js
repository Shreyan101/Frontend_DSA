/*

Find All Numbers Disappeared in an Array

Given an array nums of n integers where nums[i] is in the range [1, n], return an array of all the integers in the range [1, n] that do not appear in nums.

Example 1:

Input: nums = [4,3,2,7,8,2,3,1]
Output: [5,6]
Example 2:

Input: nums = [1,1]
Output: [2]
 

*/

/*
To find all the numbers in the range [1,n] that do not appear in the given array nums, we can use a clever trick to mark the presence of numbers within the array itself.

Here is the approach:

Iterate through the array and for each number 
nums[i], mark the position corresponding to the value of 
nums[i] (converted to a zero-based index) as negative.
Iterate through the array again, and for any position
i that remains positive, it indicates that the number 
i+1 is missing.
*/

const findDisappearedNumbers = (array) => {
  let n = array.length;
  for (let i = 0; i < n; i++) {
    const val = Math.abs(array[i]) - 1;
    if (array[val] > 0) {
      array[val] = -array[val];
    }
  }

  const result = [];

  for (let i = 0; i < n; i++) {
    if (array[i] > 0) {
      result.push(i + 1);
    }
  }
  return result;
};

console.log(findDisappearedNumbers([4, 3, 2, 7, 8, 2, 3, 1])); // Output: [5, 6]
console.log(findDisappearedNumbers([1, 1])); // Output: [2]
