// Destructuring !

const myObj = {
  name: "Toto",
  firstName: "Bar",
  city: "Paris",
};

// console.log(myObj.name);

// const { name, firstName, city, address } = myObj;

// console.log(name, firstName, city2, address);

const myArr = [1000, 2, 3, 4];

const [titi, , , toto, value5] = myArr;
console.log(titi);

// console.log(value1, value2, value3, value4,value5);s

// Destructuring within a function

// function foo(obj) {
//   console.log(obj.name);
// }

function foo({ lastName, city, name }) {
  console.log(name);
  console.log(lastName, city);
}

// foo({ name: "Toto", city: "Paris", lastName: "Bar" });
