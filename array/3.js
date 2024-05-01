var students = [
  { id: 1, name: "Nguyen Hung", mark: 6.7 },
  { id: 2, name: "Quoc Tuan", mark: 7 },
  { id: 3, name: "Huy Bao", mark: 5 },
  { id: 4, name: "Hong Nhung", mark: 6 },
];
// // them dau
// students.unshift({ id: 5, name: "Trung Kien", mark: 5.5 });
// console.log(students);
// //xoa nguyen hung
// students.splice(1, 1);
// console.log(students);
// // xoa nguyen hung cach 2
// var results = students.filter(function (item) {
//   if (item.name !== "Nguyen Hung") {
//     return true;
//   }
//   return false;
// });
// console.log(results);

// //tim mark nho nhat
var min = students[0].mark;

students.forEach(function (item) {
  if (min > item.mark) {
    min = item.mark;
  }
});

var findMin = students.filter(function (item) {
  return item.mark !== min;
});
console.log(findMin);
