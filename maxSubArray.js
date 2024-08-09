/*

Question:

Given an array of integers, write a function that finds the contiguous subarray (containing at least one number) which has the largest sum. The function should return both the maximum sum and the subarray itself.

Example: 
Input: [5, 4, -1, 7, 8]  
Output: { maxSum: 23, maxSubArray: [5, 4, -1, 7, 8] }

*/

const Input = [5, 4, -1, 7, 8];

const getMaxSubArray = (Input) => {
  let maxSum = Input[0];
  let currSum = Input[0];
  let start = 0;
  let end = 0;
  let tempStart = 0;
  for (let i = 1; i < Input.length; i++) {
    if (Input[i] > currSum + Input[i]) {
      currSum = Input[i];
      tempStart = i;
    } else {
      currSum += Input[i];
    }
    if (currSum > maxSum) {
      maxSum = currSum;
      start = tempStart;
      end = i;
    }
  }
  const result = Input.slice(start, end + 1);
  return { result, maxSum };
};

console.log(getMaxSubArray(Input));
