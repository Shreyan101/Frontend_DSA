/*

Maximum Subarray -

Given an integer array nums, find the subarray with the largest sum, and return its sum.

Example 1:

Input: nums = [-2,1,-3,4,-1,2,1,-5,4]
Output: 6
Explanation: The subarray [4,-1,2,1] has the largest sum 6.
Example 2:

Input: nums = [1]
Output: 1
Explanation: The subarray [1] has the largest sum 1.
Example 3:

Input: nums = [5,4,-1,7,8]
Output: 23
Explanation: The subarray [5,4,-1,7,8] has the largest sum 23.

*/

/*

finding the subarray with the largest sum, we can use Kadane's Algorithm. 
This algorithm runs in O(n) time complexity, making it very efficient. 

*/

let nums = [5, 4, -1, 7, 8];

const getMaxSubArray = (array) => {
  let maxSum = array[0];
  let currSum = array[0];
  for (let i = 1; i < array.length; i++) {
    currSum = Math.max(array[i], currSum + array[i]);
    maxSum = Math.max(maxSum, currSum);
  }
  return maxSum;
};

console.log(getMaxSubArray(nums));
