class Rover {
  constructor(name, x, y, direction) {
    this.name = name || "Default Name";
    this.x = x || 0;
    this.y = y || 0;
    this.direction = direction || "N";
  }

  turnLeft() {
    switch (this.direction) {
      case "N":
        this.direction = "W";
        break;
      case "W":
        this.direction = "S";
        break;
      case "S":
        this.direction = "E";
        break;
      case "E":
        this.direction = "N";
        break;
    }
  }

  turnRight() {
    switch (this.direction) {
      case "N":
        this.direction = "E";
        break;
      case "W":
        this.direction = "N";
        break;
      case "S":
        this.direction = "W";
        break;
      case "E":
        this.direction = "S";
        break;
    }
  }

  moveForward() {
    switch (this.direction) {
      case "N":
        this.y = this.y - 1;
        break;
      case "W":
        this.x = this.x - 1;
        break;
      case "S":
        this.y = this.y + 1;
        break;
      case "E":
        this.x = this.x + 1;
        break;
    }
  }

  getRoverPosition() {
    return `The rover's position on x is ${this.x} and on y ${this.y}`;
  }
}

const rover = new Rover();
let message = rover.getRoverPosition();
console.log(message);
rover.turnRight();
rover.moveForward();
rover.moveForward();
rover.moveForward();
rover.moveForward();
message = rover.getRoverPosition();
console.log(message);
