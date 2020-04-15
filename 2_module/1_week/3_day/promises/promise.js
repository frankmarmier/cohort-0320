// Promises were introduced in es6
// Mongoose methods return promises.
// They are asynchronous and they can either pass or fail.
// The way to consume these promises are through the then/catch blocks.
// Here are how they work under the hood...

// A promise has 3 states :
// Pending
// Resolved  (then)
// Rejected (catch)

// function goGetMeSomeBread() {
//   return new Promise((resolve, reject) => {
//     resolve();
//     // reject();
//   });
// }

// goGetMeSomeBread()
//   .then(() => {
//     console.log("The promise has been successful");
//   })
//   .catch(() => {
//     console.log("The promise has failed");
//   }).finally(() => {
//       console.log("I am executed no matter if the promise is failing or is successful") // Executed no matter if the promise is successful or failing..
//   })

// console.log("I am happening after...")

function gettingGroceries() {
  return new Promise((resolve, reject) => {
    let condition = Math.random();
    setTimeout(() => {
      if (condition > 0.5) {
        resolve("I have returned...");
      } else {
        reject("I am sorry the line was too big...");
      }
    }, 1000);
  });
}

// gettingGroceries()
//   .then((result) => {
//     console.log(result);
//     // console.log("I got groceries")
//   })
//   .catch((err) => {
//     console.log(err);
//     // console.log("I have no groceries...")
//   });

function gettingTheBread() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("I got the bread");
    }, 2000);
  });
}

const res = Promise.all([gettingGroceries(), gettingTheBread()])
  .then((result) => {
    console.log(result);
  })
  .catch((err) => {
    console.log(err);
  })
  .finally(() => {
    console.log("Doing something no matter what..."); 
  });
//   .then((result) => {
//     console.log(result);
//     //
//   })
//   .catch((err) => {
//     console.log(err);
//   });

console.log(res);
