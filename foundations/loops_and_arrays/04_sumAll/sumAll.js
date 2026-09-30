const sumAll = function (a, b) {
  if (typeof a === 'string' || typeof b === 'string') {
    return 'ERROR';
  } else if (Array.isArray(a) || Array.isArray(b)) {
    return 'ERROR';
  } else if (typeof a === 'number' && typeof b === 'number') {
    if (a < 0 || b < 0) {
      return 'ERROR';
    } else if (Number.isInteger(a) === false || Number.isInteger(b) === false) {
      return 'ERROR';
    } else {
      let arrayToSum = [];
      if (a < b) {
        for (let i = a; i <= b; i++) {
          arrayToSum.push(i);
        }
      } else if (a > b) {
        for (let i = b; i <= a; i++) {
          arrayToSum.push(i);
        }
      } else if (a === b) {
        return 'ERROR';
      }
      let sum = arrayToSum.reduce(
        (summation, currentNumber) => summation + currentNumber
      );
      return sum;
    }
  }
};

// Do not edit below this line
module.exports = sumAll;
