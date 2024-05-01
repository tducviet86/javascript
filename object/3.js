var countryInfo = {
  name: "VietNam",
  gdb: 271.2,
  population: 97.34,
};
var obj = {};

for (var item in countryInfo) {
  var value = countryInfo[item];
  obj[value] = item;
}
console.log(obj);
