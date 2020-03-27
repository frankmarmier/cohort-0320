const numbers = [1, 5, 9, 1000, 3, 4, 34567890];

// const filteredArray = numbers.filter(function(element) {
//   //   if (element < 10) {
//   //     return true;
//   //   } else {
//   //     return false;
//   //   }
//   return element < 10;
// });

// const filteredArray = numbers.filter(element => element < 10);

// console.log(filteredArray);

const names = [
  "Anne",
  "Vladimir",
  "Olivier",
  "Michel",
  "Sam",
  "Hakim",
  "Yuval",
  "Hakim",
  "William"
];

// const filteredNames = names.filter(function(name) {
//   //   if (name.length > 3) {
//   //     return false;
//   //   } else {
//   //     return true;
//   //   }
// //   if (name === "Hakim") {
// //     return true;
// //   } else {
// //     return false;
// //   }
//     return name === "Hakim";
// });

// const filteredNames = names.filter(name => name === "Hakim");

// console.log(filteredNames);

const students = [
  {
    name: "Anne",
    squad: "Squad 0320"
  },
  {
    name: "William",
    squad: "Squad 0320"
  },
  {
    name: "Teddy",
    squad: "Squad 0320"
  },
  {
    name: "Sam",
    squad: "Squad 0320"
  },
  {
    name: "Mathias",
    squad: "Squad 0320"
  },
  {
    name: "Nina",
    squad: "Squad 0120"
  },
  {
    name: "Pascal",
    squad: "Squad 0120"
  },
  {
    name: "Paul C",
    squad: "Squad 0120"
  },
  {
    name: "Paul D",
    squad: "Squad 0120"
  },
  {
    name: "Coline",
    squad: "Squad 0120"
  }
];

// const squad0320 = students.filter(function(student) {
//   if (student.squad === "Squad 0120") {
//     return true;
//   } else {
//     return false;
//   }
// });

// const squad0120 = students.filter(student => student.squad === "Squad 0120");

function getSquad0320(student) {
  return student.squad === "Squad 0320";
}

function getSquad0120(student) {
  return student.squad === "Squad 0120";
}

const squad0320 = students.filter(getSquad0320);
const squad0120 = students.filter(getSquad0120);

console.log(squad0320);
console.log(squad0120);

// console.log(squad0120);
