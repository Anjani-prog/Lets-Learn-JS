/* 
Given an array Arr of size N containing positive integers. Count number of smaller elements on right side of each array element.

Example 1:

Input:
N = 7
Arr[] = {12, 1, 2, 3, 0, 11, 4}
Output: 6 1 1 1 0 1 0
Explanation: There are 6 elements right
after 12. There are 1 element right after
1. And so on.

*/

function constructLowerArray(a, n) {
  let b = [];
  let pos = 0;

  while (pos < n - 1) {
    let count = 0;
    for (let i = pos + 1; i < n; i++) {
      if (a[pos] > a[i]) {
        count++;
      }
    }
    b.push(count);
    pos++;
  }
  return b;
}

let arr = [12, 1, 2, 3, 0, 11, 4];

// console.log(constructLowerArray(arr, 7));

/* 
(n - 1) * (n - 1 + 1) / 2 = (n^2 - n) / 2.
As a result, the time complexity of the code is O(n^2) because the number of iterations is proportional to n^2.

The size of the b array is equal to the number of iterations of the outer loop, which is (n - 1).
Therefore, the space complexity is O(n) because the size of the b array scales linearly with n.

 */

/* 

use recursive approach

The space complexity of this approach is O(n) due to the temporary array used during the merge step, 
and the time complexity is O(nlogn) due to the recursive nature of the Merge Sort algorithm.

*/

function mergeSort(a) {
  if (a.length <= 1) {
    return a;
  }
  const mid = Math.floor(a.length / 2);
  let leftArray = a.slice(0, mid);
  let rightArray = a.slice(mid);

  let left = mergeSort(leftArray);
  let right = mergeSort(rightArray);

  let merged = merge(left, right);
  return merged;
}

function merge(leftArr, rightArr) {
  let left = 0;
  let right = 0;
  let mergedArray = [];

  while (left < leftArr.length && right < rightArr.length) {
    if (leftArr[left] < rightArr[right]) {
      mergedArray.push(leftArr[left]);
      left++;
    } else {
      mergedArray.push(rightArr[right]);
      right++;
    }
  }
  while (left < leftArr.length) {
    mergedArray.push(leftArr[left]);
    left++;
  }
  while (right < rightArr.length) {
    mergedArray.push(rightArr[right]);
    right++;
  }
  return mergedArray;
}
function CountSmaller(a) {
  let countArray = [];
  let array = mergeSort(a);

  for (let i = 0; i < a.length; i++) {
    let val = array.indexOf(a[i]);
    countArray.push(val);
    array.splice(val, 1);
  }
  return countArray;
}
console.log(CountSmaller(arr, arr.length));
