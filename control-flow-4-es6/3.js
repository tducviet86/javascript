const arr = [5, 10, 2, 0, 8, 14];
let min = arr[0];
arr.forEach((item) => {
  if (item < min) {
    min = item;
  }
});
console.log(min);
