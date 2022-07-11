// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'

function pyramid(n, totalSpaces = 0, hashAmount = 1) {
  if (n === 0) return;
  if (!totalSpaces) totalSpaces = n + n - 1;

  const spaceAmount = totalSpaces - hashAmount;
  const hashes = "#".repeat(hashAmount);
  const spaces = " ".repeat(spaceAmount / 2);

  console.log(`${spaces}${hashes}${spaces}`);
  
  pyramid(n - 1, totalSpaces, hashAmount + 2);
}

module.exports = pyramid;
