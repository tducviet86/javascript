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
let maxHeight = mountains[0].height;
let nameMountains = mountains[0].name;
mountains.forEach((item) => {
  if (item.height > maxHeight) {
    maxHeight = item.height;
    nameMountains = item.name;
  }
});
console.log(nameMountains);
