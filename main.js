// function sayHi() {
//   alert('Hi');
//   console.log(window);
// }

// console.log(window);

// console.log('Hi');

// JSON --> JavaScript Object Notation ( Representation )

// JS Object --> Key & Value pairs
const bioData = {
  name: "Sanjay",
  gender: "Male",
  dob: "2023-10-10",
  age: 40,
  skills: ["Python", "Javascript"],
  contact: {
    mobile: "9090909090",
    email: "sanjay@gmail.com",
    website: "sanjay.com",
  },
};

// print gender from above object ** .(dot) accessing can be used **
console.log(bioData["gender"], bioData.gender);

// nested array --> array inside array
const arrayValue = [
  [1, 2, 3],
  ["Sanjay", "Santosh", "Manoj"],
  ["Python", "JavaScript"],
];

const user = { name: "Manoj", age: 12, origin: "Tanjavur" };

const users = [
  { name: "Manoj", age: 12, origin: "Tanjavur" },
  { name: "Sanjay", age: 25, origin: "Chennai" },
  { name: "Manikandan", age: 24, origin: "Bengaluru" },
];

// accessing second array's first value from arrayValue
console.log(arrayValue[1][0]);

// accessing third array's second value from arrayValue
console.log(arrayValue[2][1]);

// accessing name of the third user from users
console.log(users[2].name, users[2]["origin"]);

// print mobile & email from bioData
console.log(bioData.contact.mobile, bioData["contact"]["email"]);

// print the second skill from the bioData
console.log(bioData.skills[1]);

// values can be anything in the this
// Number
// string
// boolean
// Composite Types ( Array, Object )
