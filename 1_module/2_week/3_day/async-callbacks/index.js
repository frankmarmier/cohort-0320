// Asynchronous functions :
// setTimeout  => clearTimeout(timeoutId)
// setInterval => clearInterval(intervalId)

function foo() {
  console.log("I am foo !");
}

function goGetTheBaguetteLouisYuvalPaulineMaxime(cb) {
  let timeOutId = setTimeout(function() {
    /* The callback function to be executed according 
                                            to the specified timing. */
    let result = cb("We have returned with the baguettes");
    console.log(result);
    // return "We have returned with the baguettes";
    // console.log("We have returned with the baguettes");
  }, 5000); /* the amount of time you want to wait before executing your function 
                specified in milliseconds  1000ms = 1s */

  //   console.log(timeOutId);
  //    clearTimeout(timeOutId);
}

function cleanTheRoom() {
  console.log("Start cleaning the room...");
}

function letsStartEeating() {
  console.log("We are eating...");
}

foo();
// goGetTheBaguetteLouisYuvalPaulineMaxime(function(value) {
//   console.log(value);
//   letsStartEeating(); /* Since the function is executed only once the timeout is done
//                   You are now able to eat !  */
//   //   return "Hey";
//   /*  Returning over here would just return a value to the scope
//      where the function has been called. */
// });

// goGetTheBaguetteLouisYuvalPaulineMaxime(letsStartEeating);

// cleanTheRoom();

// let count = 0;
// let intervalId = setInterval(function() {
//   count++;
//   if (count > 10) {
//     clearInterval(intervalId);
//   }
//   console.log(count);
// }, 1000);

class MyClass {
  constructor() {
    this.x = 0;
    this.intervalId = null;
  }

  startCounting() {
    this.intervalId = window.setInterval(() => {
      console.log(this);
      this.x = this.x + 1;
      clearInterval(this.intervalId);
    }, 1000);
  }
}

const myInstance = new MyClass();

myInstance.startCounting();

// console.log(myInstance)
