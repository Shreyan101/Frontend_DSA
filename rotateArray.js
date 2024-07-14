let nums = [1, 2, 3, 4, 5, 6, 7],
  k = 3;

// Output : [5,6,7,1,2,3,4] - rotate the array to the right by k steps

// 1st step - [7, 1, 2, 3, 4, 5, 6]
// 2nd step - [6, 7, 1, 2, 3, 4, 5]
// 3rd step - [5, 6, 7, 1, 2, 3, 4]

console.log("Given Array:", nums);

const rotateArray = (array, k) => {
  let modK = k % nums?.length;

  const reverseArray = (array, start, end) => {
    while (start < end) {
      [array[start], array[end]] = [array[end], array[start]];
      start++;
      end--;
    }
  };

  reverseArray(array, 0, array.length - 1);
  reverseArray(array, 0, modK - 1);
  reverseArray(array, modK, array.length - 1);
};

rotateArray(nums, k);

console.log("Rotated Array:", nums);

/* 

Steps : 

Calculate the effective rotations needed as k % array.length since rotating by the length of the array or its multiples results in the same array.

Reverse the entire array.

Reverse the first k elements.

Reverse the remaining elements.

*/
