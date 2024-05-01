var mountains = [
  {
    name: "Fansipan",
    height: 3143,
  },
  {
    name: "Pu Ta Leng",
    height: 3049,
  },
  {
    name: "Pu Si Lung",
    height: 3076,
  },
  {
    name: "Bach Moc Luong Tu",
    height: 3046,
  },
  {
    name: "Tay Con Linh",
    height: 2427,
  },
];
let minIndex = 0;
let min = mountains[0].height;

mountains.forEach((item, index) => {
  if (item.height < min) {
    min = item.height;
    minIndex = index;
  }
});
console.log(minIndex);
