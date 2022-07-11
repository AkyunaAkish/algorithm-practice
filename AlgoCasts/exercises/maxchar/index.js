// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
  const counts = new Map();
  let highestCount = 0;
  let highestCountLetter = "";

  for (const letter of str.split("")) {
    if (counts.has(letter)) {
      counts.set(letter, counts.get(letter) + 1);
    } else {
      counts.set(letter, 1);
    }

    if (counts.get(letter) > highestCount) {
      highestCount = counts.get(letter);
      highestCountLetter = letter;
    }
  }

  return highestCountLetter;
}

module.exports = maxChar;
