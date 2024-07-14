/*
Second largest element in the array

Input: Given a sequence of five numbers 2, 4, 5, 6, 8.

Output:  6

Explanation:
In the given sequence of numbers, number 8 is the largest element, followed by number 6 
which is the second-largest element. Hence we return number 6 which is the second-largest 
element in the sequence

Note:
a) Duplicate elements may be present.

b) If no such element is present return -1.

*/

const arr = [2, 9, 5, 6, 8];

const findSecondLargest = (arr) => {
  if (arr?.length < 2) {
    return -1;
  }
  let first = -Infinity;
  let second = -Infinity;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > first) {
      second = first;
      first = arr[i];
    } else if (arr[i] > second && arr[i] !== first) {
      second = arr[i];
    }
  }
  return second === -Infinity ? -1 : second;
};

console.log(findSecondLargest(arr));
