var list = [
  { name: "Nguyen Van Anh", point: 20 },
  { name: "Tran Yen Ngoc", point: 15 },
  { name: "Nguyen Manh Hung", point: 14 },
  { name: "Pham Ngoc Minh Tuyet", point: 17 },
];
var sum = 0;
list.forEach(function (item) {
  sum += item.point;
});
console.log(sum);
