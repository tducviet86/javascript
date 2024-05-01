var arr = ["D", "C", "D", "E", "G", "K"];
var isValid = true;
for (var i = 0; i < arr.length; i++) {
  if (typeof arr[i] !== "number") {
    isValid = false;
    break;
  }
}
if (isValid) {
  console.log(" hop  le");
} else {
  console.log("0 hop le");
}
