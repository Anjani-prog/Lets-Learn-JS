/* 
Given two numbers X and Y, and a range [L, R] where 1 <= L <= R <= 31. You have to copy the set bits of 'Y' in the range L to R in 'X'.
 Return this modified X.

Note: Range count will be from Right to Left & start from 1.

Example 1:

Input: 
X = 44, Y = 3 
L = 1,  R = 5
Output: 
47
Explaination: 
Binary represenation of 44 and 3 is 101100 and 000011. 
So in the range 1 to 5 there are two set bits of 3 (1st & 2nd position). If those are set in 44 it will become 101111 which is 47.
*/

function copySetBits(X, Y, L, R) {
  // Generate a mask with set bits in the range [L, R]
  let mask = ((1 << (R - L + 1)) - 1) << (L - 1);
  console.log(mask.toString(2));
  // Extract the bits from Y that are in the range [L, R]
  let bitsToCopy = Y & mask;

  // Copy the extracted bits to X
  let modifiedX = X | bitsToCopy;

  return modifiedX;
}

// Testing the function with the example you provided
// console.log(copySetBits(44, 3, 1, 5)); // Output: 47
// console.log(copySetBits(15, 6, 2, 4)); // Output: 13
// console.log(copySetBits(127, 0, 3, 6)); // Output: 111
// console.log(copySetBits(8, 9, 1, 3)); // Output: 15
console.log(copySetBits(0, 12, 2, 5)); // Output: 24
