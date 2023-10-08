// Types of Declaration in JS
// var, const, let

// global scope

var x = 999;

function funcTwo() {
  console.log(x);
}

// local function scope

// function definition
function sampleFunction() {
  // this function {} is treated as local scope
  console.log(x);
  funcTwo();
}

// function calling
// sampleFunction();

// local block scope
{
  // local block variable
}
