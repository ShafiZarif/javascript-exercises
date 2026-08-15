// 1. Declare a function that takes 'string' as argument
const reverseString = function (str) {
  // 2. Declare an empty string
  let newString = '';
  // 3. Use for loop to iterate from the last char of the 'string'
  for (let i = str.length - 1; i >= 0; i--) {
    // 4. Add characters from the last to first of the given string to the empty new String
    newString += str.charAt(i);
  }
  // 5. Return the new string
  return newString;
};

// Do not edit below this line
module.exports = reverseString;
