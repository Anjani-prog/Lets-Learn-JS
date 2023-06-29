/* Given an array Arr[] of N integers. Find the contiguous sub-array(containing at least one number)
which has the maximum sum and return its sum.


Example 1:

Input:
N = 5
Arr[] = {1,2,3,-2,5}
Output:
9
Explanation:
Max subarray sum is 9
of elements (1, 2, 3, -2, 5) which 
is a contiguous subarray. */

function maxSubarraySum(arr, N) {
  let curSum = arr[0],
    maxSum = arr[0];

  for (let i = 1; i < N; i++) {
    curSum = Math.max(arr[i], curSum + arr[i]);
    maxSum = Math.max(maxSum, curSum);
  }

  return maxSum;
}

let arr = [1, 2, 3, -4, 6];

console.log(maxSubarraySum(arr, 5));

/* 

The time complexity of the Kadane's algorithm for finding the maximum subarray sum is O(n), where n is the length of the input array.
This is because the algorithm iterates through the array once, performing constant time operations at each iteration.

The space complexity of the algorithm is O(1) because it only requires a constant amount of extra space to store the current sum and maximum sum variables.
Regardless of the size of the input array, the amount of additional space used remains constant. 
 
 */
