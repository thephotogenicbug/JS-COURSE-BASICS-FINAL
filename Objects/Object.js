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
};

console.log(person);
console.log("-------------------------------------------");

/* how to change / modify key : value inside the person Object
   you can't change the key but you can change there value
*/
// Example
person.age = 26

// How to access this values inside Object

// Dot Notation
// console.log(person.key)
console.log("Example using Dot Notation :", person.age);
console.log("--------------------------------------------");

// Bracket Notation
// console.log(person["keyname"])
console.log("Example using Bracket Notation :", person["age"]);

