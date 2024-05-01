const avg = (...numbers) => {
  let sum = numbers.reduce((acc, item) => acc + item, 0);
  return sum / numbers.length;
};
console.log(avg(1, 2, 3, 4, 5, 6));
