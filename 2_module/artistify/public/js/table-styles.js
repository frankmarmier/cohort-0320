import apiService from "./api-service.js";

// DOM
const wikiURL = document.getElementById("wikiURL");
const name = document.getElementById("name");
const btnCreate = document.getElementById("btn-create-style");
const btnUpdate = document.getElementById("btn-update-style");
const table = document.getElementById("table-style-body");

///  CRUD ACTIONS (API)

function createStyle(payload) {
  apiService
    .post("/api/styles/create", payload)
    .then(resetUIAfterCreate)
    .catch(apiErr => console.error(apiErr));
}

function updateStyle(id) {
  apiService
    .patch(`/api/styles/update/${id}`, {
      name: name.value,
      wikiURL: wikiURL.value
    })
    .then(resetUIAfterUpdate)
    .catch(apiErr => console.error(apiErr));
}

function deleteStyle(id) {
  apiService
    .delete(`/api/styles/delete/${id}`)
    .then(apiRes => deleteTableRow(apiRes.data))
    .catch(apiErr => console.error(apiErr));
}

/// DOM MANIPULATION

function appendTableRow(style) {
  const linked = `<a class="wikiURL" href="${style.wikiURL}" target="_blank">
    <i class="fa fa-link"></i>
  </a>`;

  const unlinked = `<i class="fa fa-unlink"></i>`;

  const markup = `<tr id="style-${style._id}" class="row">
    <td class="name">${style.name}</td>
    <td class="wiki">
    </td>
    <td><i data-style-id="${style._id}" class="is-clickable update fas fa-pen"></i>
    </td>
    <td><i data-style-id="${style._id}" class="is-clickable delete fa fa-times"></i></td>
  </tr>`;

  const tpl = document.createElement("template");
  tpl.innerHTML = markup;
  const row = tpl.content.children[0];
  const td = row.children[1];

  td.innerHTML = style.wikiURL ? linked : unlinked;
  row.querySelector(".update").onclick = prepareUpdate;
  row.querySelector(".delete").onclick = () => deleteStyle(style._id);
  return table.appendChild(row);
}

function deleteTableRow(deletedStyle) {
  const row = document.getElementById(`style-${deletedStyle._id}`);
  if (row) row.remove(); // check to avoid null reference error
}

function resetUIAfterCreate(apiRes) {
  appendTableRow(apiRes.data);
  setFormValues();
}

function resetUIAfterUpdate(apiRes) {
  toggleBtnsState("create");
  updateTableRow(apiRes.data);
  setFormValues();
}

function setFormValues(fetchedStyle) {
  name.focus();
  wikiURL.value = fetchedStyle ? fetchedStyle.wikiURL : "";
  name.value = fetchedStyle ? fetchedStyle.name : "";
}

function toggleBtnsState(mode) {
  if (mode === "update") {
    btnCreate.classList.add("is-hidden");
    btnUpdate.classList.remove("is-hidden");
  } else {
    btnCreate.classList.remove("is-hidden");
    btnUpdate.classList.add("is-hidden");
  }
}

function toggleActiveRow(id) {
  const activeRow = document.getElementById(`style-${id}`);
  const previousActiveRow = table.querySelector("tr.is-active");
  if (previousActiveRow && activeRow !== previousActiveRow)
    previousActiveRow.classList.remove("is-active");
  activeRow.classList.add("is-active");
}

function updateTableRow(updatedStyle) {
  const row = document.getElementById(`style-${updatedStyle._id}`);
  const icon = row.querySelector(".wikiURL i");
  const wikiURL = row.querySelector(".wikiURL");

  row.classList.remove("is-active");
  row.querySelector(".name").textContent = updatedStyle.name;

  if (wikiURL) wikiURL.href = updatedStyle.wikiURL;

  updatedStyle.wikiURL
    ? (icon.className = "fa fa-link")
    : (icon.className = "fa fa-unlink");
}

/// EVENTS HANDLERS

function handleCreate(evt) {
  if (!name.value) return; // prevent empty name insertion
  createStyle({
    name: name.value,
    wikiURL: wikiURL.value
  });
}

function handleUpdate(style) {
  setFormValues(style);
  btnUpdate.onclick = () => updateStyle(style._id);
}

function prepareUpdate(evt) {
  const id = evt.target.getAttribute("data-style-id");
  toggleActiveRow(id);
  toggleBtnsState("update");

  apiService
    .get(`/api/styles/${id}`)
    .then(apiRes => handleUpdate(apiRes.data))
    .catch(apiErr => console.error(apiErr));
}

// EVENTS LISTENERS

document
  .querySelectorAll(".delete")
  .forEach(
    icon =>
      (icon.onclick = () => deleteStyle(icon.getAttribute("data-style-id")))
  );

document
  .querySelectorAll(".update")
  .forEach(icon => (icon.onclick = prepareUpdate));

btnCreate.onclick = handleCreate;
