var numbers = [0, -2, 1, -5, 6];
var rs = numbers.reduce(function (acc, item) {
  return acc + item;
}, 0);
console.log(rs);
