// https://takeuforward.org/data-structure/merge-two-sorted-arrays-without-extra-space/

/* Merge two Sorted Arrays Without Extra Space
Problem statement: Given two sorted arrays arr1[] and arr2[] of sizes n and m in non-decreasing order.
Merge them in sorted order. Modify arr1 so that it contains the first N elements and modify arr2 
so that it contains the last M elements.
 */

function Swap(A, B, left, right) {
  if (A[left] > B[right]) {
    let temp = A[left];
    A[left] = B[right];
    B[right] = temp;
  }
}

function findGap(gap) {
  return Math.ceil(gap / 2);
}

function merge(A, B, n, m) {
  let len = n + m;
  let gap = findGap(len);
  while (gap > 0) {
    let left = 0;
    let right = left + gap;
    while (right < len) {
      if (left < n && right >= n) {
        Swap(A, B, left, Math.abs(right - n));
      } else if (left >= n) {
        Swap(B, B, Math.abs(left - n), Math.abs(right - n));
      } else {
        Swap(A, A, Math.abs(left), right);
      }
      left++, right++;
    }
    if (gap === 1) {
      break;
    }
    gap = findGap(gap);
  }
  return { A, B };
}

let a1 = [1, 4, 8, 10];
let a2 = [2, 3, 9];

// Function Call

let res = merge(a1, a2, a1.length, a2.length);
console.log(res);
