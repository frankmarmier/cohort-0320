console.log("Hello world");

const btnGetUsers = document.getElementById("get-users");
const btnCreate = document.getElementById("create-user");
const usersList = document.getElementById("users-list");
const btnEdit = document.getElementById("btn-edit");

function getUsers() {
  axios
    .get("/api/users")
    .then((apiResponse) => {
      displayUsers(apiResponse.data);
    })
    .catch((apiErr) => {
      console.log(apiErr);
    });
}



function displayUsers(users) {
  const usersContainer = document.getElementById("users-list");
  let str = "";
  users.forEach((user) => {
    const div = document.createElement("div");
    str += `<div>
    <p>${user.name}</p>
    <button data-userId=${user._id} data-action="delete" class="btn-delete">Delete</button>
    </div>`;
  });
  usersContainer.innerHTML = str;
}

function displayUser(user) {
  const usersContainer = document.getElementById("users-list");

  const userTemplate = `<div class="user">
  <p>${user.name}</p>
  <button class="btn-set-edit">Edit</button>
  <button class="btn-delete" data-action="delete" data-userId=${user._id}>Delete</button>
  </div>`;

  usersContainer.innerHTML += userTemplate;
}

function createUser() {
  const value = document.getElementById("user-input").value;
  axios
    .post("/api/users", { name: value })
    .then((apiResponse) => {
      displayUser(apiResponse.data);
      setDeleteListeners();
    })
    .catch((apiErr) => {
      console.log(apiErr);
    });
}

function deleteUser(e) {
  // console.log(e.target);
  const userId = e.target.getAttribute("data-userId");
  // const action = e.target.getAttribute("data-action");
  // if (!userId) {
  //   return;
  // }

  axios
    .delete("/api/users/" + userId)
    .then((apiResponse) => {
      e.target.closest(".user").remove();
    })
    .catch((apiErr) => {
      console.log(apiErr);
    });
}

function setDeleteListeners() {
  const deleteBtns = document.querySelectorAll(".btn-delete");
  deleteBtns.forEach((btn) => {
    btn.onclick = deleteUser;
  });
}

function setEditListeners() {
  const editBtns = document.querySelectorAll(".btn-set-edit");
  editBtns.forEach((btn) => {
    btn.onclick = setEdit;
  });
}

function setEdit(e) {
  const id = e.target.getAttribute("data-userId");
  // console.log(e.username);
  // console.log(e.target.closest(".user").querySelector(".user-name"))
  // const usernameNode = e.target.closest(".user").querySelector(".user-name");
  const userNameNode = document.querySelector(
    `.user-name[data-userId="${id}"]`
  );
  const username = userNameNode.textContent;
  document.getElementById("user-input").value = username;
  btnEdit.setAttribute("data-userId", id);
  // console.log("Handler working...");
}

function editUser(e) {
  const value = document.getElementById("user-input").value;
  const id = e.target.getAttribute("data-userid");

  axios
    .patch("/api/users/" + id, { name: value })
    .then((apiResponse) => {
      // console.log(apiResponse);
      const userNameNode = document.querySelector(
        `.user-name[data-userId="${id}"]`
      );
      // console.log(apiResponse.data)
      userNameNode.textContent = apiResponse.data.name;
    })
    .catch((apiErr) => {
      console.log(apiErr);
    });
}

setDeleteListeners();
setEditListeners();

function setEditableLinsters() {
  const userNames = document.querySelectorAll(".user-name");
  userNames.forEach((userElement) => {
    userElement.onblur = function (e) {
      console.log(e.target);
    };
  });
}

setEditableLinsters();

// console.log(document.querySelector(".user-name,[data-userID]"))
btnEdit.onclick = editUser;
btnGetUsers.onclick = getUsers;
btnCreate.onclick = createUser;
// usersList.onclick = deleteUser;
