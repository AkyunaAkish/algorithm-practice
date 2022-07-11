// --- Directions
// Write a function that accepts an integer N
// and returns a NxN spiral matrix.
// --- Examples
//   matrix(2)
//     [[1, 2],
//     [4, 3]]
//   matrix(3)
//     [[1, 2, 3],
//     [8, 9, 4],
//     [7, 6, 5]]
//  matrix(4)
//     [[1,   2,  3, 4],
//     [12, 13, 14, 5],
//     [11, 16, 15, 6],
//     [10,  9,  8, 7]]

function matrix(n) {
  const matrixContainer = [];
  let count = 0;
  let rightSkip = 0;
  let downSkip = 0;
  let leftSkip = 0;
  let upSkip = 0;

  // create containing arrays
  for (let i = 0; i < n; i++) {
    const arr = [];

    for (let j = 0; j < n; j++) {
      arr.push(0);
    }

    matrixContainer.push(arr);
  }

  while (count < n * n) {
    for (let i = 0 + upSkip; i <= n - 1 - downSkip; i++) {
      // loop right
      count++;
      matrixContainer[rightSkip][i] = count;
    }

    rightSkip++;

    if (count === n * n) break;

    for (let i = 0 + rightSkip; i <= n - rightSkip; i++) {
      // loop down
      count++;
      matrixContainer[i][n - 1 - downSkip] = count;
    }

    downSkip++;

    if (count === n * n) break;

    for (let i = n - 1 - downSkip; i >= 0 + leftSkip; i--) {
      // loop left
      count++;
      matrixContainer[n - 1 - leftSkip][i] = count;
    }

    leftSkip++;

    if (count === n * n) break;

    for (let i = n - 1 - leftSkip; i >= 0 + rightSkip; i--) {
      // loop up
      count++;
      matrixContainer[i][0 + upSkip] = count;
    }

    upSkip++;
  }

  return matrixContainer;
}

module.exports = matrix;
