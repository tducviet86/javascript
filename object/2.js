var subject = {
  id: "math-course",
  name: "Math",
  joined: 3151,
  isAvailable: false,
};
delete subject.joined;
delete subject.isAvailable;
console.log(subject);
