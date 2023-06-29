/* 

For a given non - negative integer N, find the next smallest Happy Number.
A number is called Happy if it leads to 1 after a sequence of steps.Wherein at each step the number is replaced by the sum 
of squares of its digits that is, if we start with Happy Number and keep replacing it with sum of squares of its digits,
we reach 1 at some point.

Example 1:

Input:
N = 8
Output:
10
Explanation:
Next happy number after 8 is 10 since
1*1 + 0*0 = 1

*/

function nextHappy(N) {
  let i = N,
    sum = 0;

  function calcSquare(num) {
    let total = 0;
    while (num > 0) {
      let digit = num % 10;
      total += digit * digit;
      num = Math.floor(num / 10);
    }
    return total;
  }

  let visited = new Set();
  while (true) {
    i++;
    sum = calcSquare(i);
    while (sum !== 1 && !visited.has(sum)) {
      visited.add(sum);
      sum = calcSquare(sum);
    }
    if (sum === 1) {
      return i;
    }
  }
}

console.log(nextHappy(19));
