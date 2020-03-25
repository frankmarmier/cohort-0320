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

console.log(y);
