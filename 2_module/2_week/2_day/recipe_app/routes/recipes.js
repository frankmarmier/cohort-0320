const express = require("express");
const router = new express.Router();
const Food = require("../models/food");
const Recipe = require("../models/recipe");
/** All these routes are prefixed with  /recipes   **/

// Read
router.get("/", (req, res) => {
  // console.log(req.flash("toto"), "-------- in /recipes")
  Recipe.find()
    .populate("ingredients")
    .then((dbResult) => {
      res.render("recipes/allRecipes.hbs", {
        recipes: dbResult,
        success: req.flash.flash("toto"),
      });
    })
    .catch((dbErr) => {
      console.log(dbErr);
    });
});

router.get("/create", (req, res) => {
  Food.find()
    .then((dbResult) => {
      res.render("recipes/create.hbs", {
        foods: dbResult,
        success: req.flash("success"),
        error: req.flash("error"),
      });
    })
    .catch((dbErr) => {
      console.log(dbErr);
    });
});

// Create
router.post("/create", (req, res) => {
  // console.log(req.body);
  // You can check the incoming data to see if all the fields are filled in.
  Recipe.create(req.body)
    .then((dbResult) => {
      req.flash("success", "Your recipe has been created...");
      res.redirect("/recipes/create");
    })
    .catch((dbErr) => {
      req.flash("error", "An error occured while creating the recipe");
      res.redirect("/recipes/create");
    });
});

router.get("/manage", (req, res) => {});

// Delete
router.get("/delete/:id", (req, res) => {
  res.redirect("recipes/manage.hbs");
});

router.get("/edit/:id", (req, res) => {
  res.render("recipe/edit.hbs");
});

router.post("/edit/:id", (req, res) => {
  res.redirect("/");
});

module.exports = router;
