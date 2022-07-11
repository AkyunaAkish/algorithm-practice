// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(n) {
  const sign = Math.sign(n);

  if (n < 10 && n > -10) return n;

  const reversed = n.toString().split("").reverse().join("");
  const addSign = sign < 0 ? `${"-"}${reversed}` : reversed;

  return parseInt(addSign);
}

module.exports = reverseInt;
