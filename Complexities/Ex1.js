// Big O Time Complexity

// Constant Time: O(1)
// When your algorithm is not dependent on the input size n, it is said to have a constant time complexity with order O(1).

// Linear Time: O(n)
// You get linear time complexity when the running time of an algorithm increases linearly with the size of the input.

// Logarithm Time: O(log n)
// This is similar to linear time complexity, except that the runtime does not depend on the input size but rather on
//  half the input size.

// Quadratic Time: O(n^2)
// When you perform nested iteration, meaning having a loop in a loop, the time complexity is quadratic, which is horrible.

// Exponential Time: O(2^n)
// You get exponential time complexity when the growth rate doubles with each addition to the input (n),
// often iterating through all subsets of the input elements.

// run node path/Ex1.js

function add(n) {
  let total = 0;
  for (let i = 0; i <= n / 2; i++) {
    total += i;
  }
  return total;
}

// Time complexity = O(n)
// Spac Complexity = O(1)

// -----------------------------------------------------------------------

function add2(n) {
  return (n * (n + 1)) / 2;
}

// Time complexity = O(1)
// Spac Complexity = O(1)

// --------------------------------------------------------------------------

// add(n)>add2(n)  -- so in performance add2(n) is better
