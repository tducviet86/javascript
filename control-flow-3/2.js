var list = [
  {
    name: "Nguyen Van Dang",
    birthYear: 2000,
    point: 9.5,
  },
  {
    name: "Tran Thi Hieu",
    birthYear: 1999,
    point: 4,
  },
  {
    name: "To Vinh Nghiem",
    birthYear: 2005,
    point: 7,
  },
  {
    name: "Vo Huynh Bach",
    birthYear: 2002,
    point: 8.5,
  },
];
var count = 0;
for (var i = 0; i < list.length; i++) {
  if (list[i].point < 8) {
    count++;
  }
}
console.log(count);
