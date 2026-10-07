const getTheTitles = function (array) {
  const titleArray = [];
  array.map((item) => {
    titleArray.push(item['title']);
  });
  return titleArray;
};

// Do not edit below this line
module.exports = getTheTitles;
