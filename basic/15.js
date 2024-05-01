var persons = [
  {
    name: "Nguyen Hung",
    birthYear: 1990,
    job: "Coder",
  },
  {
    name: "Huy Bao",
    birthYear: 1989,
    job: "IT Manager",
  },
  {
    name: "Thanh Duy",
    birthYear: 2000,
    job: "Worker",
  },
];
console.log(persons[0]);
persons[0].name = "Nguyen Van Hung";
persons[0].isLeader = true;

console.log(persons[2]);
console.log(persons[2].name);
console.log(persons.length);
persons[3] = {
  name: "Lan Huong",
  birthYear: 2004,
  job: "Student",
};
console.log(persons[3]);
