/* 
Given a positive integer N, print count of set bits in it. 

Example 1:

Input:
N = 6
Output:
2
Explanation:
Binary representation is '110' 
So the count of the set bit is 2. */

function setBits(n) {
  let bits = 0;
  let i = n;
  while (i !== 0) {
    if (i % 2 === 1) {
      bits += 1;
    }
    i = Math.floor(i / 2);
  }
  return bits;
}

console.log(setBits(5));
