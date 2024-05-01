var students = [
  { id: 1, name: "Nguyen Hung", mark: 6.7 },
  { id: 2, name: "Quoc Tuan", mark: 7 },
  { id: 3, name: "Huy Bao", mark: 5 },
  { id: 4, name: "Hong Nhung", mark: 6 },
];
var results = students.map(function (item) {
  return item.name;
});
console.log(results);
