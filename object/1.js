var student = {
  name: "Nguyen Hung",
  birthYear: 1990,
  address: "Ho Chi Minh City",
};
for (var item in student) {
  console.log(typeof student[item]);
}
