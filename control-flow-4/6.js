var asean = [
  {
    country: "Viet Nam",
    gdp: {
      in2020: 343.11,
      in2021: 368,
    },
  },
  {
    country: "Thai Lan",
    gdp: {
      in2020: 501.71,
      in2021: 546.22,
    },
  },
  {
    country: "Brunei",
    gdp: {
      in2020: 12,
      in2021: 15.69,
    },
  },
  {
    country: "Cambodia",
    gdp: {
      in2020: 25.19,
      in2021: 26.08,
    },
  },
  {
    country: "Indonesia",
    gdp: {
      in2020: 1059.64,
      in2021: 1150.25,
    },
  },
];
var sum = asean[0].gdp.in2021 - asean[0].gdp.in2020;
var nameCountry;
for (var i = 0; i < asean.length; i++) {
  var sumGpd = asean[i].gdp.in2021 - asean[i].gdp.in2020;
  if (sum < sumGpd) {
    sum = sumGpd;
    nameCountry = asean[i].country;
  }
}

console.log(nameCountry);
