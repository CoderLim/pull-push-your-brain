function printMatrix(matrix: any[][]) {
  let rowStart = 0;
  let rowEnd = matrix.length - 1;
  let colStart = 0;
  let colEnd = matrix[0].length - 1;
  let count = 0;
  let total = matrix.length * matrix[0].length;

  while (count < total) {
    for (let i = colStart; i <= colEnd; i++) {
      console.log(matrix[rowStart][i]);
      count++;
    }
    rowStart++;
    for (let i = rowStart; i <= rowEnd; i++) {
      console.log(matrix[i][colEnd]);
      count++;
    }
    colEnd--;
    for (let i = colEnd; i >= colStart; i--) {
      console.log(matrix[rowEnd][i]);
      count++;
    }
    rowEnd--;
    for (let i = rowEnd; i >= rowStart; i--) {
      console.log(matrix[i][colStart]);
      count++;
    }
    colStart++;
  }
}

printMatrix([
  [1, 2, 3],
  [10, 11, 4],
  [9, 12, 5],
  [8, 7, 6],
]);

// printMatrix([
//   [1, 2],
//   [4, 3],
// ]);

// printMatrix([
//   [1, 2, 3, 4, 5],
//   [10, 9, 8, 7, 6],
// ]);
