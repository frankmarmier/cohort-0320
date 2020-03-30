const btnAdd = document.getElementById("btn-add");
const btnAddStudent = document.getElementById("add-student");

/* The first argument of addEventListener is what we call an event listener,
    and the second argument is what we call event handler.
    Every time a listener is triggered, it passes the event as argument to the 
    event handler.
*/

// First syntax to assign an event handler to an event listener.
btnAdd.addEventListener("click", addBoxes);

// window.addEventListener("scroll", addBoxes);

// Second syntax to assign an event handler to an event listner;
btnAddStudent.onclick = addStudent;

function addBoxes(event) {
  console.log(event); /* The vent that triggered the function */
  console.log(event.target); /* the domElement the event occured */

  //   console.dir(document.querySelector(".boxes").innerHTML);
  document.querySelector(".boxes").innerHTML += `<div class='box'></div>`;

  const boxes = document.querySelectorAll(".box"); /* Node List*/
  boxes.forEach(function(box) {
    // console.dir(box);
    box.addEventListener("click", boxEventHandler);
  });
}

function boxEventHandler(event) {
  //   console.log(event);
  //   console.dir(event.target);
  //   event.target.classList.toggle("is-rotating"); /* Applying a specific class */
  // event.target.remove(); /* removing the DOM Element */
  document
    .querySelector(".boxes")
    .removeChild(event.target); /* Removing from parent */
}

function addStudent(event) {
  const input = document.getElementById("student-name-input");
  console.dir(input);
  const inputValue = input.value;
  const list = document.querySelector("#students .list");
  list.innerHTML += `<li class="student">${inputValue}</li>`;
  input.value = "";
  input.focus();
  console.dir(input);
}

// console.log(document.querySelector(".list").parentElement.parentElement.parentElement.parentElement);

// console.log(document.querySelector(".list").children);
