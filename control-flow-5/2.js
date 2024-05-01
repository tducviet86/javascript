var numbers = [1, 2, 3, 4, 5, 6];
var isVaild = true;
for (var i = 0; i < numbers.length; i++) {
  if (numbers[i] >= numbers[i + 1]) {
    isVaild = false;
  }
}

if (isVaild) {
  console.log("hop le");
} else {
  console.log("khong hop le");
}
