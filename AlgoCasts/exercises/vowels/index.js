// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

function vowels(str) {
  const split = str.toLowerCase().split("");
  let vowelCount = 0;

  for (const letter of split) {
    if (/[aeiou]/.test(letter)) {
      vowelCount += 1;
    }
  }

  return vowelCount;
}

module.exports = vowels;
