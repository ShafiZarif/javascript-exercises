const add = function (firstNumber, secondNumber) {
  return firstNumber + secondNumber;
};

// console.log(add(2, 2));
// console.log(add(2, 6));
// console.log(add(0, 0));

const subtract = function (firstNumber, secondNumber) {
  return firstNumber - secondNumber;
};

// console.log(subtract(10, 6));
// console.log(subtract(-10, -4));
// console.log(subtract(-8, 7));

const sum = function (array) {
  return array.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
  }, 0);
};

// const arrayZero = [];
// console.log(sum(arrayZero));

// const arrayOne = [7];
// console.log(sum(arrayOne));

// const arrayTwo = [7, 11];
// console.log(sum(arrayTwo));

// const arrayThree = [1, 3, 5, 7, 9];
// console.log(sum(arrayThree));

const multiply = function (array) {
  return array.reduce((accumulator, currentValue) => {
    return accumulator * currentValue;
  }, 1);
};

// console.log(multiply([2, 4]));
// console.log(multiply([2, 4, 6, 8, 10, 12, 14]));

const power = function (firstNumber, secondNumber) {
  return Math.pow(firstNumber, secondNumber);
};

// console.log(power([4, 3]));
// console.log(power([3, 10]));

const factorial = function (number) {
  let factorial = 1;
  while (number > 1) {
    factorial *= number;
    number--;
  }
  return factorial;
};

// console.log(factorial(0));
// console.log(factorial(1));
// console.log(factorial(2));
// console.log(factorial(5));
// console.log(factorial(10));

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};
