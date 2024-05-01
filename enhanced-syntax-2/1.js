let numbers = [0.1, 2, 4, "2", "3", "4", "5"];
const parse = (arr) => {
  return arr.map((item) => (typeof item === "string" ? Number(item) : item));
};
console.log(parse(numbers));
