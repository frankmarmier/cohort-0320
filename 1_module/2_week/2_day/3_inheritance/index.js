class Character {
  constructor(name, weapon) {
    this.name = name;
    this.wheels = 4;
    this.weapon = weapon;
  }

  fight() {
    console.log(`I am fighting with a ${this.weapon} !`);
  }
}

// const character1 = new Character("Chrono", "Sword");

// const character2 = new Character("Toto", "JavaScript");

// character1.fight();
// character2.fight();

// console.log(character1);
// console.log(character2);

class Hero extends Character {
  constructor(name, weapon, speed) {
    super(name, weapon); // Required, and to pass in the arguments to the parent constructor.
    this.speed = speed;
  }
  fly() {
    console.log("This i am flying faster...");
  }
}

class Villain extends Character {
  constructor(name, weapon) {
    super(name, weapon);
  }

  fight() {
    // super.fight();
    console.log(`Muhahah i am a Villain fighting with ${this.weapon}`);
  }

  jumpSuperHigh() {
    console.log("Jumping super high");
  }
}

class SuperHero extends Hero {
  constructor(name, weapon, speed, superPower) {
    super(name, weapon, speed);
    this.superPower = superPower;
  }
}

const batman = new SuperHero("Batman", "Money", 10, "Robin");
console.log(batman);
batman.fly();
const toto = new Hero("Toto", "JavaScript", 1000);
console.log(toto);
// const chrono = new Villain("Chrono", "Sword");
// console.log(chrono);
// toto.fight();
// chrono.fight();

// toto.fly();
// chrono.jumpSuperHigh();
// toto.jumpSuperHigh();

// console.log(toto);
// console.log(toto, chrono);
