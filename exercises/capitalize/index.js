// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

function capitalize(str) {
  let splitWords = str.split(" ");
  let result = "";
  for (const word of splitWords) {
    //loop through array of words
    if (word.length < 2) {
      //if the word.length < 2, meaning A or I etc..
      result += word[0].toUpperCase(); // add to result string
    } else {
      for (let i = 0; i < word.length; i++) {
        if (i === 0) {
          result += word[i].toUpperCase();
        } else {
          result += word[i];
        }
      }
    }
    result += " ";
  }

  return result.slice(0, -1);
}
// capitalize("look, it is working!");
module.exports = capitalize;
