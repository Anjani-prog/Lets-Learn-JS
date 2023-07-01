function merge(vector, ans, l, mid, h) {
  let t = [];
  let i = l;
  let j = mid + 1;

  while (i < mid + 1 && j <= h) {
    if (j < vector.length && vector[i][0] > vector[j][0]) {
      ans[vector[i][1]] += h - j + 1;
      t.push(vector[i]);
      i++;
    } else {
      t.push(vector[j]);
      j++;
    }
  }

  while (i <= mid) {
    t.push(vector[i]);
    i++;
  }

  while (j <= h) {
    t.push(vector[j]);
    j++;
  }

  for (let k = 0, i = l; i <= h; i++, k++) vector[i] = t[k];
}

function mergesort(vector, ans, i, j) {
  if (i < j) {
    let mid = Math.round((i + j) / 2) - 1;
    mergesort(vector, ans, i, mid);
    mergesort(vector, ans, mid + 1, j);
    merge(vector, ans, i, mid, j);
  }
}

function constructLowerArray(arr, n) {
  let vector = [];

  for (let i = 0; i < n; i++) {
    let x = [arr[i], i];
    vector.push(x);
  }

  let ans = new Array(n);
  for (let i = 0; i < n; i++) ans[i] = 0;

  mergesort(vector, ans, 0, n - 1);

  return ans;
}

let a = [12, 1, 2, 3, 0, 11, 4];
let n = a.length;

let ans = constructLowerArray(a, n);
console.log(ans);
