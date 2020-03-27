function test() {}

let result = test();
// console.log(result);

function sayHello() {
  console.log("Hello world !");
}

// sayHello();

function sayHello2() {
  return "Hello world";
}

let resultHello = sayHello2();
// console.log(resultHello);

const x = function() {
  return "I'm toto";
};

console.log(x());
// console.log(typeof x);

function sayHelloToStudent(name) {
  let result = "Hello " + name;
  return result;
}

console.log(sayHelloToStudent("Sebastien"));
console.log(sayHelloToStudent("William"));
console.log(sayHelloToStudent("Guillaume M"));

function sum(num1, num2) {
  if (!(typeof num2 === "number") || !(typeof num1 === "number")) {
    throw Error("You need to pass me a number m8 : )");
  }

  let result = num1 + num2;
  return result;
}

console.log(sum(2, 4));
// console.log(sum(2, undefined));

// function foo(){}

const foo = () => {
  return "Iam a fat arrow function !";
};

const foo2 = () => "Iam a fat arrow function 2 !";

console.log(foo());
console.log(foo2());

const bar = str => 1 + 1;

const reverse = str => str.split("").reverse().join("");


const sum2 = (num1,num2) => num1 + num2;

console.log(sum2(9,10))
// function bar2(str) {
//   return 1 + 1;
// }

console.log(bar("hello"));
