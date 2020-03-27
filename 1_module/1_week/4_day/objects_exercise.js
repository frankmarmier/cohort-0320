const person = {
  firstName: "Vladimir",
  lastName: "LeLoup",
  role: "Ironhacker",
  favouriteMovie: "Matrix"
};

for (let key in person) {
  //   console.log(key);
  //   console.log("The key is " + key + " and the value is " + person[key]);
  //   console.log(`The key is ${key} and the value is ${person[key]}`);
}

const keys = Object.keys(person);

// for (let key of keys) {
//   console.log(person[key]);
// }

// keys.forEach((key,index) => console.log(key));

keys.forEach(function(key, i) {
  console.log(key);
});

// for(let prop in person){
//     if(prop === "name"){
//         //
//     }
// }

console.log("firstName" in person);
