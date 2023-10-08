function funcAddition(a, b) {
  return a + b;
}

// local scope variables get created as a=999, b=888 in funcAddition since a, b is parameters/arguments
console.log(funcAddition(999, 888));

const sum = funcAddition(666, 444);

console.log(sum);
