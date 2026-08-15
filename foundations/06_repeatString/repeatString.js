const repeatString = function (string, number) {
  // 1. Take two arguments, a 'string' and a 'num'
  // 2. If 'num' is negative, return "Error"
  if (number <= 0) {
    return 'ERROR';
  } else {
    // 3. Else use a for loop to repeat the string equal to the value of num
    let newString = '';
    for (let i = 1; i <= number; i++) {
      newString += string;
    }
    return newString;
  }
};

// Do not edit below this line
module.exports = repeatString;
