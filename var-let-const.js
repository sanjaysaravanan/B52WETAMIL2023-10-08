// var declarations
var x = 999;

function funcOne() {
  var x = 100; // will not affect the global value
  console.log(x);
  return x;
}

funcOne();

console.log(x);

// Guess the Output Value of X
// Output: 100 999

// Question 2:
var x = 999;

function funcOne() {
  x = 100; // will affect the global value
  console.log(x);
  return x;
}

funcOne();

console.log(x);

// Guess the Output Value of X
// Output: 100 100

// Question 3:
var x = 999;

function funcOne() {
  x = 100; // will affect the global value
  console.log(x);
  return x;
}

console.log(x);

funcOne();

// Guess the Output Value of X
// Output: 999 100

// Question 4:
var x = 999;

{
  var x = 777;
  console.log(x);
}

console.log(x);

// Guess the Output Value of X
// Output: 777 777

// let

// Question 1:
let y = 999;

function funcTwo() {
  let y = 888; // will not affect the global value
  console.log(y);
  return y;
}

funcTwo();

console.log(y);

// Guess the Output Value of y
// O/P: 888 999

// Question 2:
let y = 999;

function funcTwo() {
  y = 888; // will affect the global value
  console.log(y);
  return y;
}

funcTwo();

console.log(y);

// Guess the Output Value of y
// O/P: 888 888

// Question 3:
let y = 999;

function funcTwo() {
  y = 888; // will affect the global value
  console.log(y);
  return y;
}

console.log(y);

funcTwo();

console.log(y);

// Guess the Output Value of y
// O/P: 999 888 888

// Question 4:
let z = 777;

let z = 999; // same scope re-declaration name is not allowed in let, const

{
  let z = 444; // will not affect the global value
  console.log(z);
}

console.log(z);

// Guess the Output Value of y
// O/P: 444 777

// const
// Q1
const x = 0;

const x = 0; // same scope re-declaration name is not allowed in const, let
// O/P: Error

// Q2
const y = 0;

y = 0; // Assignment to a const variable is not allowed in const

// O/P: Error

// Q3
const z = 0;

{
  const z = 100;
  console.log(z);
}

console.log(z);

// O/P: 100 0

// Q4

const z = 0;

function test() {
  const z = 100;
  console.log(z);
}

test();

console.log(z);

// O/P: 100 0

// Extra Questions:

//
var x = 100;

for (let i = 0; i < 10; i++) {
  var x = 99;
  console.log(x);
}

console.log(x);

let x = 100;

for (let i = 0; i < 10; i++) {
  let x = 99;
  console.log(x);
}

console.log(x);
