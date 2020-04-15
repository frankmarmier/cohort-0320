const express = require("express");
const router = new express.Router();
const recipesModel = require("../models/recipes.js");

// /recipes/
// url http://localhost:4000/recipes/

// You can pass a request parameter to all routes by sending a request to the endpoint/route
// followed by a question mark and a set of key value pairs seperated with and ampersand "&"
//  e.g   http://localhost:4000/recipes?cuisine=Italian&creator=Toto
//   The request query will be accessible at req.query and the result of the query displayed above will be
//    an object =>  {cuisine: "Italian", creator:"Toto"}
router.get("/recipes", (req, res) => {
  console.log(req.query);
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

router.get("/recipes/:id", (req, res) => {
  //                  ^
  //                  |
  // Request parameter accessible through req.params.id
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
