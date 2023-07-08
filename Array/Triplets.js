/* 

Given an array arr[] of n integers. Check whether it contains a triplet that sums up to zero. 

Note: Return 1, if there is at least one triplet following the condition else return 0.

Example 1:

Input: n = 5, arr[] = {0, -1, 2, -3, 1}
Output: 1
Explanation: 0, -1 and 1 forms a triplet
with sum equal to 0.

*/

function findTriplets(arr, n) {
  for (let i = 0; i < n; i++) {
    for (let j = 1; j < n; j++) {
      if (i === j) {
        break;
      }
      for (let k = 2; k < n; k++) {
        if (i === j || j === k || i === k) {
          break;
        }
        if (arr[i] + arr[j] + arr[k] === 0) {
          return 1;
        }
      }
    }
  }
  return 0;
}

let arr = [1, , 0, -1, -3];

let res = findTriplets(arr, arr.length);

console.log(res);

/* 

use hashset inorder to reduce the time complexity

*/

function findTripleSum(arr, n) {
  var sums = new Set();
  for (let i = 0; i < n - 1; i++) {
    for (let j = i + 1; j < n; j++) {
      let ele = -(arr[j] + arr[i]);
      if (sums.has(ele)) {
        return 1;
      } else {
        sums.add(arr[j]);
      }
    }
  }
  return 0;
}

let result = findTripleSum(arr, arr.length);
console.log(result);
