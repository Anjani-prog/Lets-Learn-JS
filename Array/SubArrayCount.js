/* 

Given an array A[] of N integers and a range(L, R).
The task is to find the number of subarrays having sum in the range L to R (inclusive).

Example 1:

Input:
N = 3, L = 3, R = 8
A[] = {1, 4, 6}
Output: 
3
Explanation: 
The subarrays are [1,4], [4] and [6]
 */

function countSubarray(arr, L, R) {
  let count = 0;
  let n = 0;
  let sum = 0;

  while (n < arr.length) {
    sum += arr[n];
    if (sum >= L && sum <= R) {
      count++;
    } else if (sum > R) {
      sum -= arr[n];
    }
    n++;
  }
  sum = 0;
  n = n - 1;
  while (n >= 0) {
    sum += arr[n];
    if (sum >= L && sum <= R) {
      count++;
    } else if (sum > R) {
      sum -= arr[n];
    }
    n--;
  }

  return count;
}

let arr = [1, 4, 6];
console.log(countSubarray(arr, 5, 10));
