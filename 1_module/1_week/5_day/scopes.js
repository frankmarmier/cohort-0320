let myVariable = "toto";

function myFunction() {
  console.log(myVariable);
  const insideFunctionScoped = "im in function scope";
  var insideFunctionScopedAswell = "im in function scope";
}

// console.log(insideFunctionScopedAswell);

if (true) {
  let titi = "something";
}
// console.log(titi);

// console.log(insideFunctionScoped);

myFunction();

// Mutatable types => array and object.

const myArray = [];
console.log(myArray);
myArray.push("element");
// console.log(myArray);

const myOtherArray = myArray;

myOtherArray.push("one more element");
// console.log(myArray);

function myOtherFunction(num, string, array, object) {
  //   let newArray = [...array];
  // let newObject = { ...object };

  let newObjectStringified = JSON.stringify(object);
  console.log(typeof newObjectStringified);
  let newObjectParsed = JSON.parse(newObjectStringified);
  console.log(newObjectParsed);

  //   let newArray = [];
  //   for (let i = 0; i < array.length; i++) {
  //     newArray.push(array[i]);
  //   }
  num = 2;
  //   newObject.firstName = "Pauline";
  //   newObject.address.street = "new street";
  //   console.log(`Hey my name is ${newObject.firstName}`);
  string = "Another string";
  //   array.push("Some other value");
  for (let i = 0; i < array.length; i++) {
    newArray[i] = "We are strings";
  }
  //   console.log(num, string);
}

let myNumber = 5;
let myString = "Hello world";
let basicArray = [1, 2, 3, 5];
let myObject = {
  firstName: "Franck",
  lastName: "Marmier",
  age: 28,
  address: {
    street: "toto"
  }
};

// myOtherFunction(myNumber, myString, basicArray, myObject);

let sum = 0;
for (let i = 0; i < basicArray.length; i++) {
  sum += basicArray[i];
}

// console.log(sum);
// console.log(`Hey my name is ${myObject.firstName}`);
// console.log(`Hey my street name is ${myObject.address.street}`)
// console.log(myNumber, myString, basicArray);

const person = {
  firstName: "Hakim",
  lastName: "Ben Fadhel"
};

function makeMePauline(obj) {
  let newObject = { ...obj };
  newObject.firstName = "Pauline";
  newObject.lastName = "Ducos";
  return newObject;
}

let newPerson = makeMePauline(person);
console.log(newPerson);
console.log(person);
