var arr = [9, 8, 7, 6, 5, 4, 3, 2, 1];
var min = arr[0];
for (var i = 0; i < arr.length; i++) {
  if (arr[i] < min) {
    min = arr[i];
  }
}
console.log(min);
