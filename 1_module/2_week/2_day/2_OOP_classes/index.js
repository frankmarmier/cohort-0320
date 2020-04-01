/************
 * New es6 syntax !
 * Syntactical sugar.
 */

// function checkIfValidDirection(direction) {
//   if (direction !== "N") {
//     throw Error("Direction has to be N !");
//   } else {
//     return direction;
//   }
// }

class Rover {
  constructor(name, x, direction) {
    this.name = name || "Standard Rover";
    this.x = x || 10;
    this.y = 1;
    this.direction = direction || "S";
    // this.turnLeft = () => {
    //   console.log("I am turning left...");
    // };
  }
  turnLeft() {
    console.log(this.direction);
  }
  // turnLeft = () => {
  //   console.log("I am turning left...");
  // };
}

// console.log(rover1);
const rover1 = new Rover(null, null, direction);
// const rover1 = new Rover("Wall E", 2);
// console.log(rover1);
// Rover.prototype.turnLeft = function() {
//   console.log("New turning left function");
// };
console.log(rover1);
rover1.turnLeft();
console.log(Rover.prototype);

// console.log(Rover.prototype);

// Rover.prototype.turnLeft = function() {
//   console.log("Redefined turnLeft function");
// };

// rover1.turnLeft();

// console.log(rover2);

// rover2.turnLeft();

// console.log(Array.prototype)
// rover2.x = 40;
// console.log(rover2);

// rover1.turnLeft();
// rover2.turnLeft();
// rover1.turnLeft = function() {
//   console.log("toto");
// };
// rover1.turnLeft();
// rover2.turnLeft();
// rover2.turnLeft();

// Rover.prototype.turnLeft = function() {
//   console.log("Newly defined method");
// };

// rover1.turnLeft();
// rover2.turnLeft();
// console.log(Rover.prototype);

/**************
 * Old syntax for defining a "class"
 * Though javascript didn't have the keyword class
 * it still has what we call Factory function
 * a function that will return a new object with
 * this binding.
 */

// function Rover(name) {
//   this.name = name;
//   this.x = 1;
//   this.y = 1;
// }

// Rover.prototype.turnLeft = function() {
//   console.log("Turning...left");
// };

// const rover1 = new Rover("Wall E");
// console.log(rover1);
// const rover2 = new Rover("Toto");
// console.log(rover2)
