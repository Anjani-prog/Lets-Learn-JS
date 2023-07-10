let matrix = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
];

function transpose(arr, n) {
  if (n === arr[0].length) {
    let trsp = [];
    for (let i = 0; i < n; i++) {
      trsp.push([]);
      for (let j = 0; j < n; j++) {
        trsp[i].push(arr[j][i]);
      }
    }
    return trsp;
  }
}

let matrixT = transpose(matrix, matrix.length);
console.log(matrixT);
