// // Arrays

const myArray = [42];

const myArray2 = new Array(42);

console.log(myArray.length);
console.log(myArray2.length);

console.log(myArray);

myArray.push(2);
console.log(myArray);

myArray.push(1, 2, 3, 4, 5);
console.log(myArray);

myArray.pop();
console.log(myArray);

myArray.unshift(1000);
console.log(myArray);

myArray.shift();
console.log(myArray);

myArray.splice(1, 1);

console.log(myArray);
myArray.splice(1, 3);
console.log(myArray);

console.log(myArray.includes(100));

const names = ["Anne", "Florian", "Sebastien", "Rebecca"];

console.log(names.includes("Florian"));

names.forEach(function(e, i) {
  console.log(e);
});

function foo(element, index, array) {
  //
}

names.forEach(foo);

function printNames(element, index, array) {
  console.log("The element is " + element + "the index is " + index);
}

console.log(printNames);

names.forEach(printNames);

function foo(number) {
  console.log(number);
}

foo(1000);

names.forEach((e, i) => console.log(e));
