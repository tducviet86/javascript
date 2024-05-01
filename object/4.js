var student = {
  name: "Nguyen Hung",
  learned: ["JavaScript", "Python", "Ruby"],
  isGraduated: false,
  grade: null,
};
//them cuoi
student.learned.push("C#");
//foreach
student.learned.forEach(function (item) {
  console.log(typeof item);
});
//update grade
student.grade = "A+";

for (var item in student) {
  console.log(typeof student[item]);
}
