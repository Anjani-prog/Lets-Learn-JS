/* 

Given an array of size N containing only 0s, 1s, and 2s; sort the array in ascending order.

Example 1:

Input: 
N = 5
arr[]= {0 2 1 2 0}
Output:
0 0 1 2 2
Explanation:
0s 1s and 2s are segregated 
into ascending order.

*/

function sort012(arr, N) {
  return arr.sort((a, b) => a - b);
}

let arr = [2, 1, 2, 0, 1];

console.log(sort012(arr, arr.length));

/* 
TIME COMPLEXITY O(N LOG N) since using comparison based algorithm
SPACE COMPLEXITY O(1)
*/

/* 
SECOND METHOD

To sort the given array containing only 0s, 1s, and 2s in ascending order, we can use the Dutch National Flag Algorithm,
also known as the 3 - way Partitioning Algorithm. It allows us to sort an array with three distinct elements efficiently.

The algorithm works as follows:

Initialize low and mid pointers to the beginning of the array (0 index) and high pointer to the end of the array (arr.length - 1 index).
Iterate while mid is less than or equal to high:
If the current element at mid is 0, swap it with the element at low, increment low and mid pointers.
If the current element at mid is 1, simply increment the mid pointer.
If the current element at mid is 2, swap it with the element at high, decrement high pointer.
After the loop ends, the array will be sorted in ascending order with 0s, 1s, and 2s segregated.

 */

function DutchNF(a, N) {
  function swap(arr, i, j) {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
  }
  let low = 0,
    mid = 0,
    high = N - 1;

  while (mid <= high) {
    if (a[mid] === 0) {
      swap(a, low, mid);
      low++;
      mid++;
    } else if (a[mid] === 1) {
      mid++;
    } else {
      swap(a, high, mid);
      high--;
    }
  }
  return a;
}

console.log(DutchNF(arr, arr.length));

/* 
TIME COMPLEXITY O(N)
SPACE COMPLEXITY O(1)
*/
