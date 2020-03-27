const numbers = [1, 2, 3, 5];

// let oldSchoolSum = 0;
// for (let i = 0; i < numbers.length; i++) {
//   oldSchoolSum = oldSchoolSum + numbers[i];
// }

// console.log(oldSchoolSum);

const sum = numbers.reduce(function(accumulator, number) {
  // Solution n°1
  //   return accumulator + number;
  // Solution n°2
  // let result = accumulator + number;
  // return result;
  // Solution n°3
  accumulator += number;
  return accumulator;
});

// console.log(sum);

const names = [
  "Tatijana",
  "Guillaume G",
  "Guillaume M",
  "Mathias",
  "Nelly",
  "Hakim",
  "Pauline"
];

// const totalNumberOfCharacters = names.reduce(function(acc, name) {
//   return acc + name.length;
// }, 0);

// console.log(totalNumberOfCharacters);

const neighbours = [
  { name: "Eminem", floor: 32, petCount: 1 },
  { name: "Douglas Crockford", floor: 9, petCount: 0 },
  { name: "Brendan Eich", floor: 0, petCount: 2 },
  { name: "Evan You", floor: 2, petCount: 1 },
  { name: "Jeff", floor: 10, petCount: 1 },
  { name: "Shakira", floor: 3, petCount: 4 },
  { name: "Yohann", floor: 0, petCount: 4 }
];

// const petCount = neighbours.reduce(function(acc, currentValue) {
//   if (currentValue.petCount > 2) {
//     return acc + 1;
//   } else {
//     return acc;
//   }
// }, 0);

// console.log(petCount);

// const neighboursNames = neighbours.reduce(function(acc, currentValue) {
//   acc.push(currentValue.name);
//   return acc;
// }, []);

// console.log(neighboursNames);
