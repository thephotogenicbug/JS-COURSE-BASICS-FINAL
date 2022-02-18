// Group of variables
let name = "Naveen Kumar";
let age = 25;
let gender = "Male";
let address = "Bangalore Karnataka";

/*
  we will see how to declare this group of variables into an object variable
*/

// to declare an Object use {} curly braces by default it will be empty Object
// use key : value pair to add values inside Object ,
// key should be unique, value can be anything, (string, integer, etc)
// declare Object
let person = {
  // key : value // key: value pair
  name: "Naveen",
  age: 25,
  gender: "Male",
  address: "Bangalore karnataka",
  // sub Object
  sibling:{
    brother:"Kumar",
    sister:"Jay"
  }
};
// How to access this values inside sub Object

// Dot Notation
// console.log(person.key)
console.log("Example using Dot Notation :", person.sibling.sister);
console.log("--------------------------------------------");

/*
   why they use Object ?
   data will be well organized 
   Object is an important Concept
*/

