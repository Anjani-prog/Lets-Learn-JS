// Given an array of size N-1 such that it only contains distinct integers in the range of 1 to N. Find the missing element.

/*  Input:
N = 5
A[] = {1,2,3,5}
Output: 4 */

function missingNumber(array, n) {
  let i = 1;
  while (i <= n) {
    if (array.includes(i)) {
      i++;
    } else {
      return i;
    }
  }
  return -1;
}

let arr = [2];
console.log(missingNumber(arr, 2));

/* 
The while loop iterates until i reaches n, performing a constant time includes operation on each iteration.
In the worst case, if the missing number is at the end of the array, the loop will run n times.

The time complexity of the includes operation in an array is O(n), as it needs to search through the
entire array to check for the presence of an element.

Therefore, the overall time complexity of the original function is O(n^2).

*/

// --------------------------------------------------------------------------------------------

function optmizedMissingNumber(arr, n) {
  let newA = new Set(arr);
  for (let i = 1; i <= n; i++) {
    if (!newA.has(i)) {
      return i;
    }
  }
  return -1;
}

let arr2 = [1, 2, 3, 4];
console.log(optmizedMissingNumber(arr2, 5));

/* 
The function creates a Set from the array, which takes O(m) time, where m is the number of elements in the array.
The for loop iterates from 1 to n and performs a constant time has operation on each iteration.
The has operation in a Set has a constant time complexity of O(1) as it uses hashing to quickly check
for the presence of an element.
Therefore, the overall time complexity of the optimized function is O(m + n).

*/
