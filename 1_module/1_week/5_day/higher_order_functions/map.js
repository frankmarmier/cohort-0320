const numbers = [1, 3, 5, 9, 10];

const poweredByTwo = numbers.map(function(number) {
  //   return number ** 2;
  if (number > 2) {
    return number ** 2;
  } else {
    return number ** number;
  }
});

// Making a copy with map

// const numbersCopy = numbers.map(function(number) {
//   return number;
// });

// console.log(numbersCopy);
// numbersCopy[0] = "Hello";
// console.log(numbersCopy, numbers);

// console.log(poweredByTwo);

const names = [
  "Guillaume",
  "Olivier",
  "Nelly",
  "Teddy",
  "Rebecca",
  "Hakim",
  "Eminem"
];

const peopleSayingHello = names.map(function(name) {
  return `Hello my name is ${name}`;
});

// console.log(peopleSayingHello);

const list = names.map(function(name) {
  return `<li>${name}</li>`;
});

// console.log(list);

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

// const studentNames = students.map(function(student) {
//   return student.name;
// });

// const studentNames = students.map(student => student.name);

// console.log(studentNames);

// Making a copy of the students

// const studentsCopy = students.map(student => {
//   const copyOfStudent = { ...student };
//   return copyOfStudent;
// });

// const studentsCopy = students.map(student => ({ ...student }));
// console.log(studentsCopy);

// studentsCopy[0].name = "Franck";

// const studentsUpdated = students.map(student => {
//   student.isRemote = true;
//   return student;
// });

// console.log(studentsUpdated);

const studentsUpdated = students.map(student => {
  const studentCopy = { ...student };
  console.log(studentCopy, "----before updated");
  studentCopy.isRemote = true;
  console.log(studentCopy, "----- after update");
  return studentCopy;
});

// console.log(students);
// console.log(studentsUpdated);
