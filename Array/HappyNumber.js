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

/* 

Time Complexity:

The squareSumOfDigits function has a time complexity of O(log N), where N is the input number.
This is because the number of digits in N determines the number of iterations in the while loop.
The findNextHappyNumber function has an outer while loop that iterates from N + 1 until a happy number is found.
In the worst case, where no happy number is found within a certain range, the number of iterations will be proportional
to the difference between the next happy number and N. Therefore, the time complexity of this function is also O(log N) 
in the worst case. 

Overall, the time complexity of the solution is O(log N).

Space Complexity:

The squareSumOfDigits function uses a constant amount of space for storing the variables sumOfSquares and digit.
Hence, it has a space complexity of O(1).
The findNextHappyNumber function uses a set called seenNumbers to keep track of numbers encountered during the calculation to detect cycles. 
The maximum number of unique numbers stored in the set is limited by the number of digits in the input number N.
Therefore, the space complexity of this function is also O(log N).
Overall, the space complexity of the solution is O(log N).

In summary, the provided solution has a time complexity of O(log N) and a space complexity of O(log N), where N is the input number. 

*/
