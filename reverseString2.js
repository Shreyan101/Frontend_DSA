/*
 reverse string II

Given a string s and an integer k, reverse the first k characters for every 2k characters counting from the start of the string.

If there are fewer than k characters left, reverse all of them. If there are less than 2k but greater than or equal to k characters, then reverse the first k characters and leave the other as original.

Example 1:

Input: s = "abcdefg", k = 2
Output: "bacdfeg"
Example 2:

Input: s = "abcd", k = 2
Output: "bacd"


*/

const reverseStr = (str, k) => {
  let arr = str.split('');
  let n = arr.length;
  for (let start = 0; start < n; start += 2 * k) {
    let end = Math.min(start + k - 1, n - 1);
    let left = start;
    let right = end;
    while (left < right) {
      [arr[left], arr[right]] = [arr[right], arr[left]];
      left++;
      right--;
    }
  }
  return arr.join('');
};

console.log(reverseStr('abcdefg', 2)); // Output: "bacdfeg"
console.log(reverseStr('abcd', 2)); // Output: "bacd"
