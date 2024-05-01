function calculateAvg(number1, number2) {
  var sum = number1 + number2;
  var avg = sum / 2;
  console.log("Avg: " + avg);
  console.log("This: " + this);
}
calculateAvg.apply(true, [9, 4]);
