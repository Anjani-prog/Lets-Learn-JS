/* 
You are given an array arr[] of N integers including 0. The task is to find the smallest positive number missing from the array.

Example 1:

Input:
N = 5
arr[] = {1,2,3,4,5}
Output: 6
Explanation: Smallest positive missing 
number is 6.

*/

function firstMissingPositive(nums, n) {
  let check = Array.from({ length: n + 1 }, (_, index) => false);
  for (let i = 0; i <= n; i++) {
    if (nums[i] > 0) {
      check[nums[i] - 1] = true;
    }
  }

  for (let i = 0; i <= n; i++) {
    if (check[i] === false) {
      console.log(check);

      return i + 1;
    }
  }
  return -1;
}

// driver code
let arr = [1];
let res = firstMissingPositive(arr, arr.length);
console.log(res);
