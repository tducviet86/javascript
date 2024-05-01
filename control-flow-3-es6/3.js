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
let sum = 0;
let count = 0;
list.forEach((item) => {
  sum += item.point;
  count++;
});
console.log(sum / count);
