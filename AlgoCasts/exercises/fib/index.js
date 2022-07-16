// --- Directions
// Print out the n-th entry in the fibonacci series.
// The fibonacci series is an ordering of numbers where
// each number is the sum of the preceeding two.
// For example, the sequence
//  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// forms the first ten entries of the fibonacci series.
// Example:
//   fib(4) === 3

function fib(n) {
  const fibArr = [0, 1];
  if (n < 2) return fibArr[n];
  let finalNum = 0;

  for (let i = 2; i <= n; i++) {
    const newNum = fibArr[i - 1] + fibArr[i - 2];
    fibArr.push(newNum);

    if (n === i) {
      finalNum = fibArr[n];
    }
  }

  return finalNum;
}

module.exports = fib;
