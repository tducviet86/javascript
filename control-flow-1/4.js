var operator1 = 50;
var operator2 = 20;
var operator = "+";
var results;
switch (operator) {
  case "+":
    results = operator1 + operator2;
    break;
  case "-":
    results = operator1 + operator2;
    break;
  case "*":
    results = operator1 * operator2;
    break;
  case "/":
    results = operator1 / operator2;
    break;
  default:
    results = " toan tu khong hop le";
}
console.log(results);
