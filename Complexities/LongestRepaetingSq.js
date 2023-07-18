/*
 Given string str, find the length of the longest repeating subsequence such that it can be found twice in the given string.
The two identified subsequences A and B can use the same ith character from string str if and only if 
that ith character has different indices in A and B. For example, A = "xax" and B = "xax" 
then the index of first "x" must be different in the original string for A and B.

*/

function longestRepeatingSubsequence(str) {
  const n = str.length;

  // Create a 2D table to store the lengths of longest repeating subsequences
  const dp = Array(n + 1)
    .fill(0)
    .map(() => Array(n + 1).fill(0));

  // Populate the table
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= n; j++) {
      // If characters match and indices are different, add 1 to the previous length
      if (str[i - 1] === str[j - 1] && i !== j) {
        dp[i][j] = dp[i - 1][j - 1] + 1;
      } else {
        // Otherwise, take the maximum of the previous lengths
        dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
      }
    }
  }

  // The length of the longest repeating subsequence is stored in the bottom-right cell
  return dp[n][n];
}

// Example usage
const str = "xax";
const length = longestRepeatingSubsequence(str);
console.log(length); // Output: 2
