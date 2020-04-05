class Chronometer {
  constructor() {
    // ... your code goes here
    this.currentTime = 0;
    this.intervalId = 0;
  }
  startClick(callback) {
    // ... your code goes here
    this.intervalId = setInterval(() => {
      this.currentTime = this.currentTime + 1;
      if (callback) {
        callback();
      }
    }, 1000); //Comment for bonus
    // }, 10); //Uncomment for bonus
  }
  getMinutes() {
    return Math.floor(this.currentTime / 60); // Comment for bonus
    // Bonus
    // return Math.floor(this.currentTime / 100 / 60);
  }
  getSeconds() {
    return this.currentTime % 60; // Comment for bonus
    // return Math.floor(this.currentTime / 100) % 60; //Uncomment for bnus
  }

  getMilliseconds() {
    return this.currentTime % 100;
  }

  twoDigitsNumber(number) {
    if (number < 10) {
      return `0${number}`;
    } else return number.toString();
  }

  stopClick() {
    clearInterval(this.intervalId);
  }
  resetClick() {
    this.currentTime = 0;
  }
  splitClick() {
    // Solution n°1
    const formattedMinutes = this.twoDigitsNumber(this.getMinutes());
    const formattedSeconds = this.twoDigitsNumber(this.getSeconds());

    return `${formattedMinutes}:${formattedSeconds}`; // Comment for bonus

    // Uncomment for bonus
    // const formattedMillis = this.twoDigitsNumber(this.getMilliseconds());
    // return `${formattedMinutes}:${formattedSeconds}:${formattedMillis}`;

    // Solution n° 2
    // return `${this.twoDigitsNumber(this.getMinutes())}:${this.twoDigitsNumber(
    //   this.getSeconds()
    // )}`;
  }
}
