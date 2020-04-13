const express = require("express");
const path = require("path");
const server = express();
const hbs = require("hbs");

console.log(__dirname);

server.use(express.static(path.join(__dirname, "public")));
server.set("view engine", "hbs");

hbs.registerPartials(path.join(__dirname, "views/partials"));

server.get("/", (req, res) => {
  const data = {
    styles: ["home.css"],
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

  res.render("index.hbs", data);
});

server.get("/about", (req, res) => {
  res.render("about.hbs", {
    styles: ["about.css", "navbar-enhanced.css"],
  });
});

server.get("/contact", (req, res) => {
  res.render("contact.hbs", {
    styles: ["contact.css", "navbar.css"],
    users: [
      {
        name: "Mathias",
        image: "/images/big_cat.jpg",
      },
      { name: "Olivier" },
      { name: "Vladimur" },
      { name: "Louis" },
    ],
    // scripts: ["toto.js"]
  });
});

server.listen(3000, () => {
  console.log(`Server listening on http://localhost:3000`);
});
