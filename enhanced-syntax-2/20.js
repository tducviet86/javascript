const person = {
  firstName: "Nguyen",
  lastName: "Hung",
};
const [firstName, lastName] = person;
function displayInfo(firstName, lastName) {
  console.log(`Hello ${firstName} ${lastName}`);
}
displayInfo(firstName, lastName);
