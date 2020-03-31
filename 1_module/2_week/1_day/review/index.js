let myVariable = "Hello there !";

function foo() {
  console.log(myVariable); // <= What does it print to the console ?
  let bar = "I am bar !";

  function inner() {
    let baz = "I am baz !";
    console.log(myVariable); // <= What does it print to the console ?
    console.log(baz);
  }

  inner();
  // console.log(bar);
  console.log(baz);
}

console.log(foo);
foo();
// console.log(bar); // <= What does it print to the console ?
// inner();
// console.log(inner);
