/************
 * New es6 syntax !
 * Syntactical sugar.
 */

class Rover {
  constructor(name, x) {
    this.name = name;
    this.x = x;
    this.y = 1;
    this.direction = "N";
  }

  turnLeft() {
    console.log("method defined in class");
    //   console.log(this, "executed");
    //   this.direction = "S";
  }
}

// Rover.prototype.turnLeft = function (){
//   console.log("Some other execution....")
// }

const rover1 = new Rover("Toto", 10);
const rover2 = new Rover("Curiosity", 12);
// console.log(rover1);
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
rover1.turnLeft();
rover2.turnLeft();
// rover2.turnLeft();

// Rover.prototype.turnLeft = function() {
//   console.log("Newly defined method");
// };

rover1.turnLeft();
rover2.turnLeft();
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
