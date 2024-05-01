var arr = [
  new Date("2022-05-15"),
  new Date("2022-07-09"),
  new Date("2022-04-15"),
];
var index = 0;
var maxIndex = arr[0];
for (var i = 0; i < arr.length; i++) {
  if (arr[i] > maxIndex) {
    maxIndex = arr[i];
    index = i;
  }
}
console.log(index);
