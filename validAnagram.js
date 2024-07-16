/*

Valid Anagram

Given two strings s and t, return true if t is an anagram of s, and false otherwise.

An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

Example 1:

Input: s = "anagram", t = "nagaram"
Output: true
Example 2:

Input: s = "rat", t = "car"
Output: false


*/

const isAnagram = (str1, str2) => {
  if (str1?.length !== str2?.length) {
    return false;
  }
  let cache = {};
  for (let s of str1) {
    cache[s] = (cache[s] || 0) + 1;
  }
  for (let t of str2) {
    if (!cache[t]) {
      return false;
    }
    cache[t] = cache[t] - 1;
  }
  return true;
};

// Example usage:
console.log(isAnagram('anagram', 'nagaram')); // Output: true
console.log(isAnagram('rat', 'car')); // Output: false
