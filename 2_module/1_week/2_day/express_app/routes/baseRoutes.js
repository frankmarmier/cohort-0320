const express = require("express");
const router = new express.Router();

router.get("/", (req, res) => {
  res.render("index.hbs", {
    title: "Home Page",
  });
});

router.get("/about", (req, res) => {
  res.render("about.hbs", {
    title: "About Page",
    styles: ["about.css"],
  });
});

router.get("/toto", (req, res) => {
  res.render("toto.hbs");
});

module.exports = router;
