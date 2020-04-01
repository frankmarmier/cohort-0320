// function foo(cb) {
//   var x = 10;
//   // closure conditions
//   // 1 : 1 (or more) nested function(s)
//   // 2 : 1 or more function MUST use the parent scope
//   // 3 : the closure must provide a way to escape it(s own scope)

//   function bar() {
//     console.log(x);
//     cb(x + 10);
//   }

//   bar();
// }

// foo(function(v) {
//   console.log(v);
// })

function counter() {
  let counter = 0;

  function increment() {
    counter = counter + 1;
  }

  function getValue() {
    return counter;
  }

  return {
    increment,
    getValue
  };
}


let myCounter = counter();
console.log(myCounter);

let result =myCounter.getValue();
console.log(result);
myCounter.increment();
myCounter.increment();
myCounter.increment();
result = myCounter.getValue();
console.log(result);