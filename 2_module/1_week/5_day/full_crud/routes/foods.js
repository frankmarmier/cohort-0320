const express = require("express");
const router = new express.Router();
const Food = require("../models/food");

router.get("/foods", (req, res) => {
  Food.find({})
    .then((dbResult) => {
      res.render("foods/allFoods.hbs", {
        foods: dbResult,
        css: ["foods.css"],
      });
    })
    .catch((err) => {
      console.log(err);
    });
});

router.get("/foods/create", (req, res) => {
  res.render("foods/createFood.hbs", {
    css: ["form.css"],
  });
});

router.get("/foods/manage", (req, res) => {
  Food.find({})
    .then((dbResult) => {
      res.render("foods/manage.hbs", {
        foods: dbResult,
        css: ["table.css"],
      });
    })
    .catch((err) => {
      console.log(err);
    });
});

router.post("/foods", (req, res) => {
  console.log(req.body);
  res.send(req.body);
});

module.exports = router;
