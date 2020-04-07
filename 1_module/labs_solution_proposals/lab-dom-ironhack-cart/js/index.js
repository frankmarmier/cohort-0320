// ITERATION 1

function updateSubtotal(product) {
  const productPrice = product.querySelector(".price span").textContent;
  const quantity = product.querySelector(".quantity input").value;
  const subTotalDisplay = product.querySelector(".subtotal span");
  const subTotal = Number(productPrice) * Number(quantity); // Here we transform the values into numbers
  subTotalDisplay.textContent = subTotal;
  return subTotal;
}

function calculateAll() {
  let totalPrice = 0;
  const products = document.querySelectorAll(".product");
  products.forEach((product) => {
    totalPrice += updateSubtotal(product); // update subtotal returns the total of a product row.
    // we use that value in order to get the total price.
  });

  document.querySelector("#total-value span").textContent = totalPrice;
}

// ITERATION 4

function removeProduct(event) {
  console.log(event.target);
  const target = event.target;
  console.log("The target in remove is:", target);
  const parent = target.closest(".product"); // Instead of going from node.parentElement and again node.parentElement.parentElement
  // Closest allows us to target the closest parent matching the selector given as argument.
  // https://developer.mozilla.org/en-US/docs/Web/API/Element/closest
  parent.remove();
  calculateAll(); // We execute the calculateAll in order to get an updated total price.
}

// ITERATION 5

function createProduct() {
  const tableBody = document.querySelector("#cart tbody");
  const product = document.createElement("tr");
  const name = document.querySelector(
    ".create-product input[name='product-name']"
  ).value; // Get the input value of the name input.
  const price = document.querySelector(
    ".create-product input[name='product-price']"
  ).value; // Get the input value of the price input.
  product.classList.add("product");
  product.innerHTML = `<td class="name">
                        <span>${name}</span>
                      </td>
                      <td class="price">$<span>${price}</span></td>
                      <td class="quantity">
                        <input type="number" value="0" min="0" placeholder="Quantity" />
                      </td>
                      <td class="subtotal">$<span>0</span></td>
                      <td class="action">
                        <button class="btn btn-remove">Remove</button>
                      </td>`;
  product.querySelector(".btn.btn-remove").onclick = removeProduct;
  tableBody.appendChild(product);
}

window.addEventListener("load", () => {
  const calculatePricesBtn = document.getElementById("calculate");
  calculatePricesBtn.addEventListener("click", calculateAll); // Attach handler to listener.

  const createBtn = document.getElementById("create");
  createBtn.onclick = createProduct; // Attach handler to listener.
});
