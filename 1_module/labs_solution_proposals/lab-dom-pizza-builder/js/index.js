// Write your Pizza Builder JavaScript in this file.

// Constants
let basePrice = 10;
let ingredients = {
  pepperoni: { name: "pepperoni", price: 1 },
  mushrooms: { name: "Mushrooms", price: 1 },
  greenPeppers: { name: "Green Peppers", price: 1 },
  whiteSauce: { name: "White sauce", price: 3 },
  glutenFreeCrust: { name: "Gluten-free crust", price: 5 },
};

// Initial value of the state (the state values can change over time)
let state = {
  pepperoni: true,
  mushrooms: true,
  greenPeppers: true,
  whiteSauce: false,
  glutenFreeCrust: false,
};

// This function takes care of rendering the pizza based on the state
// This function is triggered once at the beginning and every time the state is changed
function renderEverything() {
  renderPepperoni();
  renderMushrooms();
  renderGreenPeppers();
  renderWhiteSauce();
  renderGlutenFreeCrust();

  renderButtons();
  renderPrice();
}

function renderPepperoni() {
  document.querySelectorAll(".pep").forEach((onePep) => {
    if (state.pepperoni) {
      onePep.style.visibility = "visible";
    } else {
      onePep.style.visibility = "hidden";
    }
  });
}

function renderMushrooms() {
  // Iteration 1: set the visibility of `<section class="mushroom">`
  const allMushroomElements = document.querySelectorAll(".mushroom");
  allMushroomElements.forEach((mushroom) => {
    if (state.mushrooms) {
      mushroom.style.visibility = "visible";
    } else {
      mushroom.style.visibility = "hidden";
    }
  });
}

function renderGreenPeppers() {
  // Iteration 1: set the visibility of `<section class="green-pepper">`
  const allGreenPepperElements = document.querySelectorAll(".green-pepper");
  allGreenPepperElements.forEach((greenPepper) => {
    if (state.greenPeppers) {
      greenPepper.style.visibility = "visible";
    } else {
      greenPepper.style.visibility = "hidden";
    }
  });
}

function renderWhiteSauce() {
  // Iteration 2: add/remove the class "sauce-white" of `<section class="sauce">`
  const sauceElement = document.querySelector(".sauce");
  if (state.whiteSauce) {
    sauceElement.classList.add("sauce-white");
  } else {
    sauceElement.classList.remove("sauce-white");
  }
}

function renderGlutenFreeCrust() {
  // Iteration 2: add/remove the class "crust-gluten-free" of `<section class="crust">`
  const crustElement = document.querySelector(".crust");
  if (state.glutenFreeCrust) {
    crustElement.classList.add("crust-gluten-free");
  } else {
    crustElement.classList.remove("crust-gluten-free");
  }
}

function renderButtons() {
  // Iteration 3: add/remove the class "active" of each `<button class="btn">`
  const allButtons = document.querySelectorAll(".btn");

  // Working without custom data attributes.

  allButtons.forEach((btn) => {
    // The parsing could be handled using regex.

    const parsedBtn = btn.className // btn btn-green-peppers active
      .replace("btn", "") // btn-green-peppers active
      .replace("btn-", "") // green-peppers active
      .replace("active", "") // green-peppers
      .replace("-", "") // greenpeppers
      .trim(); // removes any white space at start / end

    for (let key in state) {
      if (key.toLowerCase().includes(parsedBtn.toLowerCase())) {
        if (state[key]) {
          btn.classList.add("active");
        } else {
          btn.classList.remove("active");
        }
      }
    }
  });
}

function renderPrice() {
  // Iteration 4: change the HTML of `<aside class="panel price">`
  const list = document.querySelector(".panel.price ul");
  const totalPriceDisplay = document.querySelector(".panel.price strong");

  list.innerHTML = "";
  let listItems = "";
  let totalPrice = basePrice;

  for (let key in state) {
    if (state[key]) {
      // Since the state and the ingredients objects have the same keys, we're able to access
      // the ingredients values through the state keys.
      listItems += `<li>$${ingredients[key].price} ${ingredients[key].name}</li>`;
      totalPrice += ingredients[key].price;
    }
  }

  list.innerHTML = listItems;
  totalPriceDisplay.textContent = `$${totalPrice}`;
}

renderEverything();

// Iteration 1: Example of a click event listener on `<button class="btn btn-pepperoni">`
document.querySelector(".btn.btn-pepperoni").addEventListener("click", () => {
  state.pepperoni = !state.pepperoni;
  renderEverything();
});

// Iteration 1: Add click event listener on `<button class="btn btn-mushrooms">`
document.querySelector(".btn.btn-mushrooms").onclick = (e) => {
  state.mushrooms = !state.mushrooms;
  renderEverything();
};
// Iteration 1: Add click event listener on `<button class="btn btn-green-peppers">`
document.querySelector(".btn.btn-green-peppers").onclick = (e) => {
  state.greenPeppers = !state.greenPeppers;
  renderEverything();
};
// Iteration 2: Add click event listener on `<button class="btn btn-sauce">`
document.querySelector(".btn.btn-sauce").onclick = (e) => {
  state.whiteSauce = !state.whiteSauce;
  renderEverything();
};

// Iteration 2: Add click event listener on `<button class="btn btn-crust">`
document.querySelector(".btn.btn-crust").onclick = (e) => {
  state.glutenFreeCrust = !state.glutenFreeCrust;
  renderEverything();
};
