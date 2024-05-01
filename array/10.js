var numbers = [1, -2, 9, 4];
var rs = numbers.reduce(function (acc, item) {
  return acc + String(item);
}, "");
console.log(rs);
