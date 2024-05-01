const arr = [60, 20, 30, 44, 50, 30];
let minArr = arr[0];
arr.forEach((item) => {
  if (item < minArr) {
    minArr = item;
  }
});
console.log(minArr);
