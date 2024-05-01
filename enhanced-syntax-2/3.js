const sum = (...numbers) => {
  return numbers.reduce((acc, item) => acc + item, 0);
};
console.log(sum(1, 2, 3, 4, 5, 6));
