function foo(clbk) {
  const value = "I am in the scope of function foo";
  clbk(value);
}

function bar(valueFromFoo) {
  console.log(valueFromFoo);
}

foo(bar);
