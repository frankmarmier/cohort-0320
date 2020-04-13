const express = require("express");
const path = require("path");
const server = express();

console.log(__dirname);

server.use(express.static(path.join(__dirname, "public")));
server.set("view engine", "hbs");


server.get("/", (req, res) => {
  const data = {
    count: 42,
    title: "My First Express App",
    isLoggedIn: false,
    users: [
      { name: "Mathias" },
      { name: "Olivier" },
      { name: "Vladimur" },
      { name: "Louis" },
    ],
    myKey: "This is my key",
  };

  res.render("index", data);
});

server.listen(3000, () => {
  console.log(`Server listening on http://localhost:3000`);
});
