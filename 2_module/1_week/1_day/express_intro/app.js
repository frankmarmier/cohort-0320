const express = require("express");
const hbs = require("hbs");

const server = express();


server.set("view engine", "hbs"); // Sets the default view engine, here hbs

server.get("/", function (request, response) {
  response.render("index.hbs", {
    name: "Teddy",
  });
});

server.get("/about", (request, response) => {
  response.render("about.hbs", {
    information:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, deleniti quaerat sit odit suscipit placeat? Ut accusamus impedit quidem mollitia, sed odit sint vitae a fuga explicabo voluptas. Assumenda, rem!",
    creators: ["Sebastien", "William", "Yuval", "Guillaume x2"],
    pets: [
      {
        name: "Fugee",
        type: "Cat",
      },
      {
        name: "Zelda",
        type: "Cat",
      },
      {
        name: "Sharon",
        type: "Cat",
        address: {
          city: "Paris",
        },
      },
    ],
  });
});

server.get("/contacts", (request, response) => {
  response.send("Welcome to contacts");
});


server.listen(3001, () => {
  console.log("Server running...");
});
