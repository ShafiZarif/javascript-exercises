const findTheOldest = function (array) {
  const getAge = function (person) {
    if (person.yearOfDeath) {
      const age = person.yearOfDeath - person.yearOfBirth;
      return age;
    } else {
      const age = new Date().getFullYear() - person.yearOfBirth;
      return age;
    }
  };
  const sorted = array.sort((a, b) => {
    return getAge(b) - getAge(a);
  });
  return sorted[0];
};

// Do not edit below this line
module.exports = findTheOldest;
