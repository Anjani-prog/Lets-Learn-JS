/* 
Given an array of N integers arr[] where each element represents the maximum length of the jump that can be made forward
from that element. This means if arr[i] = x, then we can jump any distance y such that y ≤ x.
Find the minimum number of jumps to reach the end of the array (starting from the first element). 
If an element is 0, then you cannot move through that element.

Note: Return -1 if you can't reach the end of the array.


Example 1:

Input:
N = 11 
arr[] = {1, 3, 5, 8, 9, 2, 6, 7, 6, 8, 9} 
Output: 3 
Explanation: 
First jump from 1st element to 2nd 
element with value 3. Now, from here 
we jump to 5th element with value 9, 
and from here we will jump to the last. 

*/

function minJumps(arr, n) {
  if (n <= 1) {
    return 0; // No jumps needed for an empty array or an array with a single element
  }
  if (arr[0] === 0) {
    return -1; // Cannot move forward from the first element
  }

  let maxReach = arr[0]; // Maximum index that can be reached
  let steps = arr[0]; // Remaining steps in the current jump
  let jumps = 1; // Number of jumps made

  for (let i = 1; i < n; i++) {
    if (i === n - 1) {
      return jumps; // Reached the end of the array
    }

    maxReach = Math.max(maxReach, i + arr[i]); // Update the maximum reach

    steps--; // Use one step in the current jump

    if (steps === 0) {
      jumps++; // Need to make another jump
      if (i >= maxReach) {
        return -1; // Cannot reach beyond the current position
      }
      steps = maxReach - i; // Update the steps with the remaining steps in the new jump
    }
  }

  return -1; // Cannot reach the end of the array
}

// Example usage
const arr = [1, 0, 3, 2, 6, 7];
console.log(minJumps(arr, arr.length));
