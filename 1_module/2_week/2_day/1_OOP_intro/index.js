/******************
 *    OOP Intro  *
 *****************/

//  Remember me ?

const rover1 = {
  name: "Wall E",
  x: 1,
  y: 1,
  direction: "S",
  // turnLeft: function(){
  //   console.log(this);
  // }
  turnLeft: turnLeft
};

const rover2 = {
  name: "Curiosity",
  x: 1,
  y: 2,
  direction: "N",
  // turnLeft: function(){
  //   console.log(this);
  // }
  turnLeft: turnLeft
};

const rover3 = {
  name: "Curiosity",
  x: 1,
  y: 2,
  direction: "N",
  // turnLeft: function(){
  //   console.log(this);
  // }
  turnLeft: turnLeft
};

// rover1.turnLeft();
// rover2.turnLeft();

// rover1.turnLeft();
function turnLeft() {
  console.log(this);
  // this.direction = "South"
}

// function turnLeft(rover) {
//   // turnLeft
// }
