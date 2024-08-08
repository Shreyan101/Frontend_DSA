/*

Question: Group Anagrams
Given an array of strings, your task is to group the strings that are anagrams of each other into separate subarrays. An anagram is a word formed by rearranging the letters of another word, using all the original letters exactly once.

Input:
An array of strings, arr, where each string consists of lowercase alphabets.
Output:
A 2D array where each subarray contains strings that are anagrams of each other.

const arr = ['abc', 'edf', 'bca', 'qwe', 'def', 'efd', 'wqe'];

[['abc', 'bca'], ['edf', 'def', 'efd'], ['qwe', 'wqe']]

*/

const arr = ['abc', 'edf', 'bca', 'qwe', 'def', 'efd', 'wqe'];

const groupAnagrams = (arr) => {
  let map = new Map();
  arr.forEach((str) => {
    let splitStr = str.split('').sort().join();
    if (map.has(splitStr)) {
      map.get(splitStr).push(str);
    } else {
      map.set(splitStr, [str]);
    }
  });

  return Array.from(map.values());
};

console.log(groupAnagrams(arr));
