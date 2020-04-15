const express = require("express");
const router = new express.Router();
const recipesModel = require("../models/recipes.js");

// /recipes/
// url http://localhost:4000/recipes/
router.get("/recipes", (req, res) => {
  recipesModel
    .find({})
    .then((dbResult) => {
      res.render("recipes/recipes.hbs", {
        recipes: dbResult,
        styles: ["recipes.css"],
      });
    })
    .catch((dbErr) => {
      res.render("error.hbs");
    });
});

// /recipes/:id
router.get("/recipes/:id", (req, res) => {
  recipesModel
    .findById(req.params.id)
    .then((dbResult) => {
      // Display a view with only one recipe
      console.log(dbResult);
      res.render("recipes/oneRecipe.hbs", {
        recipe: dbResult,
      });
    })
    .catch((dbErr) => {
      res.render("fourOhFour.hbs");
    });
});

// Req params / req.query

module.exports = router;
