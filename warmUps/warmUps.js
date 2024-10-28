// Warm-Up!
// 1. Find the Length of Each String in an Array
// Problem: Write a function getLengths(arr) that takes an array of strings and returns an array of their lengths.
// Example:
// getLengths([“hello”, “world”, “hi”]); // [5, 5, 2]

const arr = ['hello', 'world', 'hi'];
const getLengths = (arr) => {

    let result = []

    arr.map((word) => {

        result.push(word.length)

    })

    return result

}

console.log(getLengths(arr))

// Hint: Use map() and the length property.
// 2. Square Each Number in an Array
// Problem: Write a function squareArray(arr) that takes an array of numbers and returns a new array with each number squared.
// Example:
// squareArray([1, 2, 3]); // [1, 4, 9]
// Hint: Use the map() method.
// 3. Find the Minimum Number in an Array
// Problem: Write a function findMin(arr) that takes an array of numbers and returns the smallest number in the array.
// Example:
// findMin([4, 1, 9, 7, 3]); // 1
// Hint: Use a loop to compare each number or Math.min().
// 4. Remove Duplicates from an Array
// Problem: Write a function removeDuplicates(arr) that takes an array and returns a new array with only unique values.
// Example:
// removeDuplicates([1, 2, 2, 3, 4, 4]); // [1, 2, 3, 4]
// Hint: Try using a Set to handle uniqueness, or loop through and add values to a result array only if they’re not already present.