"use strict";

const person = {
  firstName: "Tran",
  lastName: "A",
  birthYear: 2000,
  getAge: function () {
    return 2022 - this.birthYear;
  },
};

console.log(person.getAge());
