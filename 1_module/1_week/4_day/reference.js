const neighbours = [
  { name: "Eminem", floor: 32, petCount: 1 },
  { name: "Douglas Crockford", floor: 9, petCount: 0 },
  { name: "Brendan Eich", floor: 0, petCount: 2 },
  { name: "Evan You", floor: 2, petCount: 1 },
  { name: "Jeff", floor: 10, petCount: 1 },
  { name: "Shakira", floor: 3, petCount: 4 },
  { name: "Yohann", floor: 0 }
];

function howManyPets(array) {
  //   console.log(array[0].petCount);
  let count = 0;
  array.forEach(function(neighbour) {
    console.log(neighbour.petCount);
    if ("petCount" in neighbour) {
      count += neighbour.petCount;
    }
  });
  return count;
}

const result = howManyPets(neighbours);
console.log(result);

let name = "Michel";
let otherName = name;

// console.log(name, otherName);
// otherName = "Sebastien";
// console.log(name, otherName);

// const myArray = ["a string"];
// const otherArray =  [...myArray];

// console.log(otherArray, myArray);

// otherArray.push("another string")

// console.log(otherArray, myArray);

let bar = "i am bar";

function foo() {
  console.log(bar);
  let myVariable = "hello";
  console.log(myVariable);
}

const words = ["eaiuhdaiu", "eafeeafae"];

// function countWords(arr) {
// //   console.log(arr);
//   console.log(words);
// }

// countWords(words);

// foo();

// console.log(myVariable);
