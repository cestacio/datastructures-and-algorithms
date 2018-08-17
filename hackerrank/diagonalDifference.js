/*
Given a square matrix, calculate the absolute difference between the sums of its diagonals.
*/

function diagonalDifference(matrix) {
  let len = matrix.length;
  let sum1 = 0;
  let sum2 = 0;

  for (let i = 0; i < matrix.length; i++) {
    sum1 += matrix[i][i];
    sum2 += matrix[len - 1 - i][i];
  }
  return Math.abs(sum1 - sum2);
}

let matrix = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];

diagonalDifference(matrix);
