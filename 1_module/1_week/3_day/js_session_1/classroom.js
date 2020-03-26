function sayHelloWorld() {
  console.log("Hello World !");
}

// console.log(sayHelloWorld());

function foo() {
  return "bar";
}

var x = foo();

// console.log(x);

function dummyReturn(p) {
  return p;
}

console.log(dummyReturn("Hello"));

function sayHelloTo(name) {
  if (typeof name !== "string") {
    throw Error("Mistakes buddy");
  } else {
    return "Hello" + name;
  }
}

// console.log(sayHelloTo(2));

function makeOpposite(b) {
  if (typeof b !== "boolean") {
    throw Error("This is not a boolean!");
  }
  return !b;
}

makeOpposite(true);

function calculate(operator, operande1, operande2) {
  // if(operator === "+" || operator === "-" || operator === "/" || operator === "*") {
  let result = 0;
  switch (operator) {
    case "+":
      result = operande1 + operande2;
      break;
    case "-":
      result = operande1 - operande2;
      break;
    case "/":
      result = operande1 / operande2;
      break;
    case "*":
      result = operande1 * operande2;
      break;
    default:
      throw Error("Invalid operator");
  }

  if (isNaN(result)) {
    throw Error("Operandes need to be numbers");
  } else {
    return result;
  }
  // } else {
  //   throw Error("Please enter a correct operator");
  // }
}

console.log(calculate("*", 3, 4));
console.log(calculate("*", 3, "feahfhuieafa"));
