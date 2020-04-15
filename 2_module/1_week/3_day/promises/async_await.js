function gettingTheBread() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      //   resolve("I got the bread");
      reject("There was no bread....");
    }, 2000);
  });
}

function startCooking() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Breakfast ready");
    }, 2000);
  });
}

function startEating() {
  return new Promise((resolve, reject) => {
    resolve("We are eating...");
  });
}

gettingTheBread()
  .then((result) => {
    console.log(result);
    startCooking()
      .then((result2) => {
        console.log(result2);
        startEating()
          .then((result3) => {
            console.log(result3);
          })
          .catch((err) => {
            console.log(err);
          });
      })
      .catch((err) => {
        console.log(err);
      });
  })
  .catch((err) => {
    console.log(err);
  });

async function myFunction() {
  try {
    const result = await gettingTheBread();
    console.log(result);
    const result2 = await startCooking();
    console.log(result2);
    const result3 = await startEating();
    console.log(result3);
  } catch (err) {
    console.log(err);
  }
}

myFunction();
// console.log("I am happening after...");
