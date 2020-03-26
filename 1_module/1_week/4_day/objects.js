const myObject = {
  name: "Mathias"
};

// console.log(myObject);

myObject.age = 30;

// console.log(myObject);

myObject.favoriteMovies = ["Matrix 1", "Matrix 2", "Matrix 3"];

// console.log(myObject);

// console.log(myObject.name);
// console.log(myObject["favoriteMovies"]);

// delete myObject.name;

// console.log(myObject);

for (let toto in myObject) {
  if (toto === "name") {
  }
  //   console.log(myObject[toto]);
}

const keys = Object.keys(myObject);

for (let key of keys) {
  //   console.log(key);
  //   console.log(myObject[key]);
}

// console.log(Object.values(myObject));

// console.log(Array.isArray(Object.values(myObject)))

// keys.forEach(function(element, index) {
//   console.log(element);
//   console.log(myObject[element]);
// });
// console.log(myObject.isFamous)

console.log(Object.entries(myObject));

myObject.favouriteBook = {
  title: "Matrix",
  pages: 10000
};

console.log(myObject);
