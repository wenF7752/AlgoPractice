// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

const estring = "abcccccccddaDDDDDDDDDD";

function maxChar(str) {
  let tempLowerCase = str.toLowerCase();
  let charMap = {};
  for (let char of tempLowerCase) {
    if (charMap[char]) {
      charMap[char]++;
    } else {
      charMap[char] = 1;
    }
  }
  for (let char in charMap) {
    if (charMap[char] === Math.max(...Object.values(charMap))) {
      return char;
    }
  }
}

module.exports = maxChar;
