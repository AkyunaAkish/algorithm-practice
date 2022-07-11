// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

// function steps(n) {
//   for (let i = 1; i <= n; i++) {
//     let str = "";

//     for (let j = 0; j < n; j++) {
//       if (j < i) {
//         str += "#";
//       } else {
//         str += " ";
//       }
//     }

//     console.log(str);
//   }
// }

function steps(n, totalSpaces = 0, hashAmount = 1) {
  if (n === 0) return;

  // if this is the first function call, set total spaces
  if (!totalSpaces) totalSpaces = n;

  const hashes = "#".repeat(hashAmount);
  const spaces = " ".repeat(totalSpaces - hashes.length);

  console.log(`${hashes}${spaces}`);

  steps(n - 1, totalSpaces, hashAmount + 1);
}

// steps(4);
module.exports = steps;
