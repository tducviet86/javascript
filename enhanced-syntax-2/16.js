const info = [
  ["firstName", "Nguyen"],
  ["lastName", "Hung"],
  ["address", "Tan Binh, Ho Chi Minh"],
];

const [[, firstName], [, lastName], [, address]] = info;
console.log({ firstName, lastName, address });
