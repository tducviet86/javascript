let isValid = true;
const arr = ["D", "C", "D", "E", "G", "K"];
arr.forEach((item) => {
  console.log(typeof item);
  if (typeof item !== "string") {
    isValid = false;
    return;
  }
});
isValid ? console.log("khong hop le") : console.log(" hop le");
