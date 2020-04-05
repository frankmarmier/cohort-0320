const chronometer = new Chronometer();

// get the buttons:
const btnLeft = document.getElementById("btnLeft");
const btnRight = document.getElementById("btnRight");

// get the DOM elements that will serve us to display the time:
let minDec = document.getElementById("minDec");
let minUni = document.getElementById("minUni");
let secDec = document.getElementById("secDec");
let secUni = document.getElementById("secUni");
let milDec = document.getElementById("milDec");
let milUni = document.getElementById("milUni");
let splits = document.getElementById("splits");

function printTime() {
  // ... your code goes here
  printMinutes();
  printSeconds();
  // printMilliseconds(); // Uncomment for bonus
}

function printMinutes() {
  const minutes = chronometer.splitClick().split(":")[0];
  minDec.textContent = minutes.split("")[0];
  minUni.textContent = minutes.split("")[1];
}

function printSeconds() {
  // Here since the splitClick method returns us the time formatted as
  // 00:00, we can split it with ":" giving me an array with [minutes,seconds]

  const seconds = chronometer.splitClick().split(":")[1];
  //  We then again split the string and insert it into the document.
  secDec.textContent = seconds.split("")[0];
  secUni.textContent = seconds.split("")[1];
}

// ==> BONUS
function printMilliseconds() {
  const millis = chronometer.splitClick().split(":")[2];
  milDec.textContent = millis.split("")[0];
  milUni.textContent = millis.split("")[1];
}

function printSplit() {
  splits.innerHTML += `<li>${chronometer.splitClick()}</li>`;
}

function clearSplits() {
  // ... your code goes here
  splits.innerHTML = "";
}

function setStopBtn() {
  if (btnLeft.classList.contains("start")) {
    btnLeft.classList.remove("start");
    btnLeft.classList.add("stop");
    btnLeft.textContent = "STOP";
  }
}

function setSplitBtn() {
  if (btnRight.classList.contains("reset")) {
    btnRight.classList.remove("reset");
    btnRight.classList.add("split");
    btnRight.textContent = "SPLIT";
  }
}

function setStartBtn() {
  if (btnLeft.classList.contains("stop")) {
    btnLeft.classList.add("start");
    btnLeft.classList.remove("stop");
    btnLeft.textContent = "START";
  }
}

function setResetBtn() {
  if (btnRight.classList.contains("split")) {
    btnRight.classList.remove("split");
    btnRight.classList.add("reset");
    btnRight.textContent = "RESET";
  }
}

// Start/Stop Button
btnLeft.addEventListener("click", () => {
  if (btnLeft.classList.contains("start")) {
    setSplitBtn();
    setStopBtn();
    chronometer.startClick(printTime);
  } else {
    setStartBtn();
    setResetBtn();
    chronometer.stopClick();
  }
});

// Reset/Split Button
btnRight.addEventListener("click", () => {
  if (btnRight.classList.contains("reset")) {
    chronometer.resetClick();
    clearSplits();
    printTime();
  } else {
    printSplit();
  }
});
