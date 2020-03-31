window.addEventListener("DOMContentLoaded", function() {
  // console.dir(document);

  // const title = document.getElementById("title");
  // // console.log(title);
  // // console.dir(title);

  // title.textContent = "Heyyyy DOM Intro";
  // // background-color: red;
  // title.style.backgroundColor = "red";
  // // font-size: 40px;
  // title.style.fontSize = "40px";

  // console.log(title.classList);
  // title.classList.add("rotating");
  // title.classList.add("rotating");
  // console.log(title.className);
  // title.classList.remove("rotating");
  // title.classList.remove("rotating");
  // title.classList.remove("rotating");
  // console.log(title.className);
  // title.classList.toggle("rotating");
  // console.log(title.className);
  // title.classList.toggle("rotating");
  // console.log(title.className);
  // console.log(title.className);
  // console.log(typeof title.className);

  // title.className += " another-class";

  // console.log(title.className);
  // let previousClasses = title.className;
  // title.className = previousClasses + " again-another-class";
  // console.log(title.className);
  // // title.id = "big-title";
  // console.dir(title);

  // const box = document.querySelector(".box:nth-child(2)");
  // console.log(box);

  // Selecting all the elements that have the box class

  // const boxes = document.querySelectorAll(".box");
  // console.log(boxes);

  // boxes.forEach(function(box, i) {
  //   console.log(box);
  //   if (i % 2 === 0) {
  //     box.style.backgroundColor = "red";
  //   }
  // });

  // console.log(document.querySelectorAll("body > *"));

  // This gives you an HTMLCollection, no forEach.

  // const boxes = document.getElementsByClassName("box");
  // console.log(boxes);
  // console.log(boxes);
  // for (let box of boxes) {
  //   box.style.backgroundColor = "purple";
  // }

  // the boxes variable is an HTMLCollection, it doesn't
  // have a forEach method.
  // So here we use the spread operator to take all the values
  // for instance the dom elements inside the htmlcollection
  // and put them inside an array. Making us able to use the forEach

  // [...boxes].forEach(function(box) {
  //   box.style.backgroundColor = "green";
  // });

  // This is an HTMLCollection so it doesn't have the forEach method.
  // const allMyDivs = document.getElementsByTagName("div");
  // console.log(allMyDivs);

  const boxContainer = document.getElementById("boxes");
  // console.log(boxContainer);
  // // console.log(boxContainer);

  // console.log(boxContainer.innerHTML);

  // boxContainer.innerHTML = "";
  // console.log(boxContainer.innerHTML);
  const boxContainerInnerHTML = boxContainer.innerHTML;
  boxContainer.innerHTML += boxContainerInnerHTML + "<div class='box'></div>";
  boxContainer.innerHTML = boxContainer.innerHTML + "<div class='box'></div>";

  boxContainer.innerHTML += `<div class="circle">I am a circle</div>`;
  // console.log(boxContainer.innerHTML);

  // boxContainer.textContent = "<h2>I am a big title</h2>";

  // Without storing in a variable

  // document.getElementById("boxes").innerHTML = "";
  // document.getElementById("boxes").innerHTML = "<div class='box'></div>";
  // document.getElementById("boxes").innerHTML += "<div class='box'></div>";
  // document.getElementById("boxes").innerHTML += "<div class='box'></div>";
  // document.getElementById("boxes").innerHTML += "<div class='box'></div>";
  // document.getElementById("boxes").innerHTML += "<div class='box'></div>";
  // document.getElementById("boxes").innerHTML += "<div class='box'></div>";
  // document.getElementById("boxes").innerHTML += "<div class='box'></div>";
});

// console.log(document.getElementById("boxes"),"hello");

const boxes = document.getElementsByClassName("box");

console.log(boxes);
[...boxes].forEach(function(box) {
  box.style.backgroundColor = "black";
});
