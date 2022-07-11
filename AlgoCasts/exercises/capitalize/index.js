// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

function capitalize(str) {
  const split = str.split(" ");
  let finalStr = "";

  for (const word of split) {
    const firstLetter = word[0].toUpperCase();
    const restOfWord = word.substr(1, word.length);
    finalStr += firstLetter + restOfWord + " ";
  }

  return finalStr.trim();
}

module.exports = capitalize;
