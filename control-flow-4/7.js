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
    name: "Vo Quoc Kien Hug",
    points: [4, 9, 8],
  },
  {
    name: "Vo Quoc Kien Hung",
    points: [7.5, 7, 8],
  },
];
var sum = 0;
var namePoints;
for (var i = 0; i < students[0].points.length; i++) {
  sum += students[0].points[i];
}
for (var i = 0; i < students.length; i++) {
  var total = 0;
  for (var j = 0; j < students[i].points.length; j++) {
    total += students[i].points[j];
  }
  if (sum > total) {
    sum = total;
    namePoints = students[i].name;
  }
}

console.log(namePoints);
