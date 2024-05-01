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
var mountainsMax = mountains[0].height;
var nameMax = mountains[0].name;
for (var i = 0; i < mountains.length; i++) {
  if (mountainsMax < mountains[i].height) {
    mountainsMax = mountains[i].height;
    nameMax = mountains[i].name;
  }
}
console.log(nameMax);
