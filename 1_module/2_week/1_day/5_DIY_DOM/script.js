function init() {
  const studentList = document.getElementById("students");
  const addButton = document.getElementById("add-button");
  const removeButton = document.getElementById("remove-button");

  studentList.addEventListener("click", lineThrough);

  addButton.addEventListener("click", addStudent);
  removeButton.addEventListener("click", removeSelectedStudents);

  function addStudent() {
    const input = document.querySelector("input");
    const student = input.value;
    const li = document.createElement("li");
    li.innerHTML = student;
    li.className = "student";
    studentList.appendChild(li);
    input.value = "";
    input.focus();
  }

  function removeSelectedStudents() {
    document.querySelectorAll(".student.has-line-through").forEach(element => {
      element.remove();
    });
  }

  function lineThrough(event) {
    event.target.classList.toggle("has-line-through");
  }
}

window.addEventListener("DOMContentLoaded", init);
