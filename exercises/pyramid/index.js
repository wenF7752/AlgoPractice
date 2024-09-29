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

function pyramid(n) {
    let result = ''
    for (let i = 1; i <= n; i++) {
        let space = n - i;
        let hash = i * 2 - 1;
        result += ' '.repeat(space) + '#'.repeat(hash) + ' '.repeat(space) + '\n';
    }

    return result;
}

console.log(pyramid(4))
module.exports = pyramid;
