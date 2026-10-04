const palindromes = function (string) {
  const lowerCasedString = string.toLowerCase().replace(/[\W_]/g, '');

  let j = lowerCasedString.length - 1;

  for (let i = 0; i < lowerCasedString.length / 2; i++) {
    if (lowerCasedString[i] !== lowerCasedString[j]) {
      return false;
    }
    j--;
  }
  return true;
};

// Do not edit below this line
module.exports = palindromes;
