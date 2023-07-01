/* 
Given a number in its binary form find if the given binary number is a multiple of 3.
It is recommended to finish the task using one traversal of input binary number.

Example 1:

Input: S = "0011"
Output: 1
Explanation: "0011" is 3, which is divisible by 3. */

function isDivisible(s) {
  let sum = 0;
  let digit = 0;
  for (let i = 0; i < s.length; i++) {
    digit = parseInt(s[i]);
    sum = (sum * 2 + digit) % 3;
  }
  return sum === 0 ? 1 : 0;
}

let binary = "1";
console.log(isDivisible(binary));

/*
 Divisibility Rules  for decimal

Divisibility by 2: 
A number is divisible by 2 if its last digit is even (0, 2, 4, 6, or 8). 
For example, 16, 342, and 5,378 are divisible by 2.

Divisibility by 3: 
A number is divisible by 3 if the sum of its digits is divisible by 3. 
For example, 123 (1 + 2 + 3 = 6) and 1,563 (1 + 5 + 6 + 3 = 15) are divisible by 3.

Divisibility by 4: 
A number is divisible by 4 if the number formed by its last two digits is divisible by 4. 
For example, 856 (56 is divisible by 4) and 2,204 (04 is divisible by 4) are divisible by 4.

Divisibility by 5:
A number is divisible by 5 if its last digit is 0 or 5. 
For example, 175 and 4,520 are divisible by 5.

Divisibility by 6: 
A number is divisible by 6 if it is divisible by both 2 and 3. 
For example, 48 (divisible by 2 and 3) and 1,278 (divisible by 2 and 3) are divisible by 6.

Divisibility by 9: 
A number is divisible by 9 if the sum of its digits is divisible by 9. 
For example, 153 (1 + 5 + 3 = 9) and 2,763 (2 + 7 + 6 + 3 = 18) are divisible by 9.

Divisibility by 10: 
A number is divisible by 10 if its last digit is 0. 
For example, 1,230 and 750 are divisible by 10. */
