const arr = [22, 33, 44, 56, 78, 90, 102];

const element = 44;

const binarySearch = (arr, targetEle) => {
  let leftIndex = 0;
  let rightIndex = arr.length - 1;

  while (leftIndex <= rightIndex) {
    let mid = Math.floor((leftIndex + rightIndex) / 2);
    if (arr[mid] === targetEle) {
      return mid;
    }
    if (arr[mid] > targetEle) {
      rightIndex = mid - 1;
    } else {
      leftIndex = mid + 1;
    }
  }
  return -1;
};

console.log(binarySearch(arr, element));
