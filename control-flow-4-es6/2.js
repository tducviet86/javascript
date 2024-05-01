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
students.forEach((item) => {
  const rs = item.points.filter((point) => point < 5);
  if (rs.length > 0) {
    console.log(item.name);
  }
});
