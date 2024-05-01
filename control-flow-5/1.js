numbers = [5, 10, 88, 23, 59, 1];
for (var i = 0; i < numbers.length; i++) {
  var sum = numbers[i] + numbers[i + 1];
  if (sum % 2 === 0) {
    console.log(numbers[i], numbers[i + 1]);
  }
}
