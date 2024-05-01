const info = {
  address: "Ho Chi Minh",
  country: "Viet Nam",
  netIncome: 20000,
};
const person = {
  name: "Nguyen Hung",
  birthYear: 2001,
  ...info,
};

console.log(person);
