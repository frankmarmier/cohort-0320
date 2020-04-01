const btn = document.getElementById("create-block");
const colorInput = document.getElementById("input-color");
const numberInput = document.getElementById("input-number");
const blockContainer = document.getElementById("blocks");
const btnReset = document.getElementById("reset-blocks");
const btnRemoveSelectedBlocks = document.getElementById(
  "remove-selected-blocks"
);

// console.dir(colorInput)

function createBlock(color) {
  // 1st solution
  // return `<div class="block" style="background-color:${color}"></div>`;
  const newBlock = document.createElement("div");
  // console.dir(newBlock, "this is my new div");
  newBlock.classList.add("block");
  newBlock.style.backgroundColor = color;
  newBlock.addEventListener("click", setListener);
  return newBlock;
}

function createBlocks() {
  let amount = numberInput.value;
  let color = colorInput.value;
  for (let i = 0; i < amount; i++) {
    // blockContainer.innerHTML += createBlock(color);
    blockContainer.appendChild(createBlock(color));
  }
  // setListeners();
}

function setListeners() {
  document.querySelectorAll(".block").forEach(block => {
    block.onclick = setListener;
  });
}

function setListener(e) {
  console.log(e.target);
  e.target.classList.toggle("is-selected");
}

function resetBlocks() {
  blockContainer.innerHTML = "";
}

function removeSelectedBlocks() {
  document.querySelectorAll(".block.is-selected").forEach(selectedBlock => {
    selectedBlock.remove();
  });
}

// console.log(document.querySelector(".one-class"))

btn.onclick = createBlocks;
btnReset.onclick = resetBlocks;
btnRemoveSelectedBlocks.onclick = removeSelectedBlocks;
