// Given an unsorted array A of size N that contains only positive integers, find a continuous sub-array that
//  adds to a given number S and return the left and right index(1 - based indexing) of that subarray.

// In case of multiple subarrays, return the subarray indexes which come first on moving from left to right.

// Note:- You have to return an ArrayList consisting of two elements left and right.
// In case no such subarray exists return an array consisting of element - 1.

// Example 1:

// Input:
// N = 5, S = 12
// A[] = {1,2,3,7,5}
// Output: 2 4
// Explanation: The sum of elements
// from 2nd position to 4th position
// is 12.

// using sliding window

function subarraySum(arr, n, s) {
  let left = 0; // Left pointer of the sliding window
  let right = 0; // Right pointer of the sliding window
  let sum = 0; // Current sum of elements in the window

  while (right <= n) {
    if (sum === s) {
      left++;
      return [left, right];
    } else if (sum < s) {
      if (right < n) {
        sum += arr[right];
      }
      right++;
    } else {
      sum -= arr[left];
      left++;
    }
  }

  return -1;
}

const inputString =
  "142 112 54 69 148 45 63 158 38 60 124 142 130 179 117 36 191 43 89 107 41 143 65 49 47 6 91 130 171 151 7 102 194 149 30 24 85 155 157 41 167 177 132 109 145 40 27 124 138 139 119 83 130 142 34 116 40 59 105 131 178 107 74 187 22 146 125 73 71 30 178 174 98 113";
const array = inputString.split(" ").map(Number);

console.log(subarraySum(array, 74, 687));
