var students = [
  {
    name: "Vo Thi Thu Trang",
    points: [7, 9, 10, 9],
  },
  {
    name: "Tran Huynh Phuong",
    points: [7, 8, 5, 8, 6],
  },
  {
    name: "Nguyen Van Tai",
    points: [7, 9, 4, 7, 9],
  },
  {
    name: "Phan Kien",
    points: [2, 5, 6, 3],
  },
];
for (var i = 0; i < students.length; i++) {
  for (var j = 0; j < students[i].points.length; j++) {
    if (students[i].points[j] < 5) {
      console.log(students[i].name);
    }
  }
}
