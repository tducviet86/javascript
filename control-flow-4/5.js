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
var minIndex = 0;
var min = mountains[0].height;
for (var i = 0; i < mountains.length; i++) {
  if (mountains[i].height < min) {
    min = mountains[i].height;
    minIndex = i;
  }
}
console.log(minIndex);
