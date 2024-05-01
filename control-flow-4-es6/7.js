var students = [
  {
    name: "Nguyen Thi Anh",
    points: [7, 6, 8],
  },
  {
    name: "Van Mai Ngoc",
    points: [10, 9, 5],
  },
  {
    name: "Tran Thanh Thuy",
    points: [6, 6.5, 8],
  },
  {
    name: "Vo Quoc Kien Hung",
    points: [4, 9, 8],
  },
  {
    name: "Vo Quoc Kien Hung",
    points: [7.5, 7, 8],
  },
];
let minTotalPoint = students[0].points.reduce((item, acc) => acc + item, 0);
let minStudent = students[0].name;
students.forEach((item) => {
  const totalPoint = item.points.reduce((item, acc) => item + acc, 0);
  if (minTotalPoint > totalPoint) {
    minStudent = totalPoint;
    minStudent = item.name;
  }
});
console.log(minTotalPoint);
console.log(minStudent);
