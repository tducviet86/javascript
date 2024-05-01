var arr = [true, false, "A", "D", 24, "!", "K"];
var results = arr.filter(function (item) {
  if (typeof item === "string") {
    return true;
  }
  return false;
});
console.log(results);
