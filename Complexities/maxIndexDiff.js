/* 
Given an array arr[] of n positive integers. The task is to find the maximum of j - i subjected to the constraint of arr[i] <= arr[j].

Example 1:

Input:
n = 9
arr[] = {34, 8, 10, 3, 2, 80, 30, 33, 1}
Output: 
6
Explanation: 
In the given array arr[1] < arr[7]  satisfying 
the required condition (arr[i] <= arr[j])  thus 
giving the maximum difference of j - i which is
6(7-1).
 */

function maxIndexDiff(arr, n) {
  let maxDiff = 0;
  for (let i = 0; i < n; i++) {
    for (let j = n - 1; j > i; j--) {
      if (arr[i] <= arr[j] && maxDiff < j - i) {
        maxDiff = j - i;
      }
    }
  }
  return maxDiff;
}

let a = [18, 0, 1, 2, 0];
console.log(maxIndexDiff(a, a.length));
