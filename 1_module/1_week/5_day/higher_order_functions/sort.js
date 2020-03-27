const numbers = [9, 5, 10, 3, 1];

// numbers.sort();
// console.log(numbers);

numbers.sort(function(a, b) {
  //   if (a < b) {
  //     return 1;
  //   } else if (a > b) {
  //     return -9;
  //   } else {
  //     return 0;
  //   }
  //   sorting ascendingly
  //   return a - b;
  // sorting descendingly
  return b - a;
});

console.log(numbers);

const names = ["Bob", "anna", "ànna", "Joe", "Hillary"];
// names.sort();
// console.log(names);

// names

names.sort(function(a, b) {
  // if (a.toUpperCase() < b.toUpperCase()) {
  //   return 1000;
  // } else if (a.toUpperCase() > b.toUpperCase()) {
  //   return -13;
  // } else {
  //   return 0;
  // }
  //   if (a.localeCompare(b) < b.localeCompare(a)) {
  //     return 1;
  //   } else if (a.localeCompare(b) > b.localeCompare(a)) {
  //     return -1;
  //   } else {
  //     return 0;
  //   }

  //   return a.localeCompare(b);
  return b.localeCompare(a);
});

// console.log(names);

const positions = [
  { x: 9, y: 10 },
  { x: 1, y: 10 },
  { x: 3, y: 10 },
  { x: 8, y: 10 },
  { x: 2, y: 10 }
];

positions.sort(function(a, b) {
  //   if (a.x < b.x) {
  //     return 1;
  //   } else if (a.x > b.x) {
  //     return -1;
  //   } else {
  //     return 0;
  //   }
  //   return a.x - b.x;
    // if(a.x > b.x && a.y > b.y){
    //     // return positiive value;
    // }
  return b.x - a.x;
});

// console.log(positions);

