var numbers = [-2, 100, 2, -1, -4, 5, 6];
var results = numbers.map(function (item) {
  if (item < 0) {
    return 0;
  }
  return item;
});
console.log(results);
