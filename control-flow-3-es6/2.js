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
let count = 0;
list.forEach((item) => {
  if (item.point < 8) {
    count++;
  }
});
console.log(count);
