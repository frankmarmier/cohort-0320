const charactersAPI = new APIHandler("http://localhost:8000");

const charactersContainer = document.querySelector(".characters-container");

window.addEventListener("load", () => {
  document.getElementById("fetch-all").onclick = function (event) {
    fetchAllCharacters(event);
  };

  document.getElementById("fetch-one").onclick = function (event) {
    fetchOneCharacter(event);
  };

  document.getElementById("delete-one").onclick = function (event) {
    deleteCharacter(event);
  };

  document.getElementById("edit-character-form").onsubmit = function (event) {
    // Prevent default in order to disable the default behaviour of a form.
    // Avoids page refresh too.
    event.preventDefault();
    editCharacter(event);
  };

  document.getElementById("new-character-form").onsubmit = function (event) {
    // Prevent default in order to disable the default behaviour of a form.
    // Avoids page refresh too.
    event.preventDefault();
    createCharacter(event);
  };
});

function createCharacterCard(character) {
  return `   <div class="character-info">
  <div class="id">Id: ${character.id}</div>
  <div class="name">Character Name:  ${character.name}</div>
  <div class="occupation">Character Occupation:${character.occupation}</div>
  <div class="cartoon">Is a Cartoon?: ${character.cartoon}</div>
  <div class="weapon">Character Weapon : ${character.weapon}</div>
</div>`;
}

function fetchAllCharacters(event) {
  charactersAPI
    .getFullList()
    .then((apiResult) => {
      /** This is what we call a guard.
       * handleSuccess function will only be executed
       * if the event is defined.
       * Create & Edit functions call this fetchAllCharacters
       * function in order to display the result.
       * We handle the success over there.
       */
      event && handleSuccess(event.target);

      const characters = apiResult.data;
      charactersContainer.innerHTML = "";
      characters.forEach((c) => {
        charactersContainer.innerHTML += createCharacterCard(c);
      });
    })
    .catch((apiErr) => {
      event && handleError(event.target);
    });
}

function fetchOneCharacter(event) {
  const characterId = document.querySelector(
    ".operation input[name='character-id']"
  ).value;
  if (!characterId) return;
  charactersAPI
    .getOneRegister(characterId)
    .then((apiResult) => {
      const character = apiResult.data;
      charactersContainer.innerHTML = createCharacterCard(character);
      handleSuccess(event.target);
    })
    .catch((apiErr) => {
      handleError(event.target);
    });
}

function deleteCharacter(event) {
  const characterId = document.querySelector(".operation.delete input").value;
  charactersAPI
    .deleteOneRegister(characterId)
    .then((apiRes) => {
      handleSuccess(event.target);
      fetchAllCharacters();
    })
    .catch((apiErr) => {
      handleError(event.target);
    });
}

function editCharacter(event) {
  const editForm = document.getElementById("edit-character-form");
  // Get the inputs
  const idInput = editForm.querySelector("input[name='chr-id']");
  const nameInput = editForm.querySelector("input[name='name']");
  const occupationInput = editForm.querySelector("input[name='occupation']");
  const weaponInput = editForm.querySelector("input[name='weapon']");
  const isCartoonInput = editForm.querySelector("input[name='cartoon']");

  // Create update object from input values.
  const characterUpdate = {
    name: nameInput.value,
    occupation: occupationInput.value,
    weapon: weaponInput.value,
    cartoon: isCartoonInput.checked,
  };

  // Make the call
  charactersAPI
    .updateOneRegister(idInput.value, characterUpdate)
    .then((apiRes) => {
      handleSuccess(editForm.querySelector("#send-data"));
      // Fetch all characters to display the result
      fetchAllCharacters();
    })
    .catch((apiErr) => {
      handleError(editForm.querySelector("#send-data"));
    });
}

function createCharacter(event) {
  event.preventDefault();
  // Get the inputs
  const createForm = document.getElementById("new-character-form");
  const nameInput = createForm.querySelector("input[name='name']");
  const occupationInput = createForm.querySelector("input[name='occupation']");
  const weaponInput = createForm.querySelector("input[name='weapon']");
  const isCartoonInput = createForm.querySelector("input[name='cartoon']");

  // Create object from input values.
  const newCharacter = {
    name: nameInput.value,
    occupation: occupationInput.value,
    weapon: weaponInput.value,
    cartoon: isCartoonInput.checked,
  };

  // Make the api call.
  charactersAPI
    .createOneRegister(newCharacter)
    .then((apiResponse) => {
      handleSuccess(event.target.querySelector("#send-data"));
      // Display all the characters again.
      fetchAllCharacters();
    })
    .catch((apiErr) => {
      handleError(event.target.querySelector("#send-data"));
    });
}

// Generic functions that will remove/add the classes
// active / error.
// They receive an html element as a parameter.
function handleSuccess(htmlElement) {
  htmlElement.classList.add("active");
  htmlElement.classList.remove("error");
}

function handleError(htmlElement) {
  htmlElement.classList.add("error");
  htmlElement.classList.remove("active");
}
