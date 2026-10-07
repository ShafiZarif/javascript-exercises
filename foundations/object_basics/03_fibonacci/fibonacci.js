const fibonacci = function (number) {
  if (number > 0 && typeof number === 'number') {
    // console.log(`START`);
    // console.log(number);

    let producedFibonacci = [1, 1];

    for (let i = 3; i <= number; i++) {
      let lastFirstOnePosition = producedFibonacci.length - 1;

      let lastOne = producedFibonacci[lastFirstOnePosition];

      // console.log(`this is the first one from the behind, ${lastOne}`);

      let lastSecondOnePosition = producedFibonacci.length - 2;

      let lastSecond = producedFibonacci[lastSecondOnePosition];

      // console.log(`this is the second one from the behind, ${lastSecond}`);

      producedFibonacci.push(lastOne + lastSecond);
    }

    // console.log(producedFibonacci);

    let lastDigit = producedFibonacci[number - 1];

    //     return `END
    // here is the result: ${lastDigit}`;
    return lastDigit;
  } else if (number === 0) {
    return 0;
  } else if (number < 0 || number !== 0 || typeof number !== 'number') {
    return 'OOPS';
  }
};
// Do not edit below this line
module.exports = fibonacci;
