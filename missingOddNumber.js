/*
Question: Find the First Missing Odd Number
You are given an array of integers. Your task is to find the first missing odd number in the sequence of odd numbers starting from 1. If all the odd numbers up to the largest odd number in the array are present, return the next odd number after the largest one.

Input:
An array of integers, arr, where each integer is non-negative.
Output:
An integer representing the first missing odd number in the sequence. If no odd number is missing, return the next odd number in the sequence.

let arr = [1, 2, 55, 66, 13, 7, 6, 22, 89, 81];

3

let arr = [1, 2, 3, 4, 5, 6, 7, 8];

9

*/

let arr = [1, 2, 3, 55, 66, 13, 7, 6, 22, 89, 81];

const findMissingOddNumber = (arr) => {
  let filteredOddNumber = arr
    .filter((item) => item % 2 !== 0)
    .sort((a, b) => a - b);
  let firstOddNumber = 1;
  filteredOddNumber.forEach((num) => {
    if (num !== firstOddNumber) {
      return firstOddNumber;
    }
    firstOddNumber += 2;
  });
  return firstOddNumber;
};

console.log(findMissingOddNumber(arr));
