/*
Two Sum

Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.

Example 1:

Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
Example 2:

Input: nums = [3,2,4], target = 6
Output: [1,2]
Example 3:

Input: nums = [3,3], target = 6
Output: [0,1]

*/

/*

Hash Map Approach:

Use a hash map (map) to store each number's index as you iterate through the array.
For each number nums[i], calculate its complement complement = target - nums[i].
Check for Complement:

If map already contains the complement as a key, it means nums[i] and complement add up to target. 
Return the indices [map[complement], i].
Store in Hash Map:

If the complement is not found in the hash map, store nums[i] in the hash map with its index as the value (map[nums[i]] = i).
Return Result:

If no solution is found by the end of the loop, return an empty array [].
This solution runs in O(n) time complexity since each lookup and insertion in the hash map takes constant time. 
It is efficient and meets the problem requirements effectively.

*/

const getTwoSum = (array, sum) => {
  const map = {};
  for (let i = 0; i < array.length; i++) {
    const complement = sum - array[i];
    if (map.hasOwnProperty(complement)) {
      return [map[complement], i];
    }
    map[array[i]] = i;
  }
  return [];
};

// Test cases
console.log(getTwoSum([2, 7, 11, 15], 9));
console.log(getTwoSum([3, 2, 4], 6));
console.log(getTwoSum([3, 3], 6));
