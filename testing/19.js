const arr = [1, 2, 3, 4, 5, 6];
function checkArr(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < arr[i + 1]) {
      return false;
    }
  }
  return true;
}
checkArr(arr) ? console.log("valid") : console.log("invalid");
