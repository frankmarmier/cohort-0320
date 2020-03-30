let myVariable = true;

if (myVariable) {
  console.log("hello");
} else {
  console.log("hey");
}

// myVariable ?  if truthy  :  if falsy

myVariable ? console.log("truthy") : console.log("falsy");

myVariable = false;

let result = myVariable ? "I am truthy" : "";

if (myVariable) result = "I am truthy";

console.log(result);

let result2;

if (myVariable) result2 = "I am truthy";

// if (myVariable) {
//   result2 = "I am truthy";

// } else {
//   result2 = "I am falsy";
// }

// console.log(result);

let condition1 = true;
let condition2 = false;

// let endResult;
// if(condition1){
// if(condition2){
//     endResult = "here";
// }else{
//     endResult = "In nested else"
// }
// }else{
//     endResult = "there"
// }
// console.log(endResult)

// let endResult = condition1 ? (condition2 ? "here" : "in nested else") : "there";
// console.log(endResult);