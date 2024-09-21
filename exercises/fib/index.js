// --- Directions
// Print out the n-th entry in the fibonacci series.
// The fibonacci series is an ordering of numbers where
// each number is the sum of the preceeding two.
// For example, the sequence
//  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// forms the first ten entries of the fibonacci series.
// Example:
//   fib(4) === 3

log = console.log;
log("aa");

function fib(n) {
  let resultArray = [];

  while (resultArray.length <= n) {
    if (n === 0) {
      log("invalid input, must be greater than 0");
      return;
    }
    if (resultArray.length === 0) resultArray.push(0); //edge case 0
    else if (resultArray.length === 1) resultArray.push(1); //edge case 1
    else
      resultArray.push(
        resultArray[resultArray.length - 1] +
          resultArray[resultArray.length - 2]
      );
  }
  //   log(resultArray[n]);
  return resultArray[n];
}

fib(4);
module.exports = fib;
