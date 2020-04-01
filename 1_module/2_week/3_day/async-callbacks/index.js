function foo() {
  console.log("I am foo !");
}

function goGetTheBaguetteLouisYuvalPaulineMaxime(cb) {
  let timeOutId = setTimeout(function() {
    let result = cb("We have returned with the baguettes");
    console.log(result);
    // return "We have returned with the baguettes";
    // console.log("We have returned with the baguettes");
  }, 1000);

  //   clearTimeout(timeOutId);
  //   console.log(timeOutId);
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
//   letsStartEeating();
//   //   return "Hey";
// });
// cleanTheRoom();

// let count = 0;
// let intervalId = setInterval(function() {
//   count++;
//   if (count > 10) {
//     clearInterval(intervalId);
//   }
//   console.log("I am called many times");
// }, 1000);
