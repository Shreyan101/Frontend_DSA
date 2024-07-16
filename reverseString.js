/*

Reverse String

Write a function that reverses a string. The input string is given as an array of characters s.

You must do this by modifying the input array in-place with O(1) extra memory.

Example 1:

Input: s = ["h","e","l","l","o"]
Output: ["o","l","l","e","h"]
Example 2:

Input: s = ["H","a","n","n","a","h"]
Output: ["h","a","n","n","a","H"]

*/

const reverseString = (str) => {
  let left = 0;
  let right = str.length - 1;

  while (left < right) {
    let temp = str[right];
    str[right] = str[left];
    str[left] = temp;

    left++;
    right--;
  }
};

let s1 = ['h', 'e', 'l', 'l', 'o'];
reverseString(s1);
console.log(s1); // Output: ["o", "l", "l", "e", "h"]

let s2 = ['H', 'a', 'n', 'n', 'a', 'h'];
reverseString(s2);
console.log(s2); // Output: ["h", "a", "n", "n", "a", "H"]
