/*
 Given a number and its reverse. Find that number raised to the power of its own reverse.
Note: As answers can be very large, print the result modulo 109 + 7.

Example 1:

Input:
N = 2
Output: 4
Explanation: The reverse of 2 is 2 and after raising power of 2 by 2 we get 4 which gives remainder as 4 when divided by 1000000007.
Example 2:

Input:
N = 12
Output: 864354781
Explanation: The reverse of 12 is 21and 1221 when divided by 1000000007 gives remainder as 864354781.

*/

function power(N, R) {
  let pow = Math.pow(N, R) % (Math.pow(10, 9) + 7);

  return pow;
}

console.log(power(13, 31));
