const express = require("express");
const router = new express.Router();
const Restaurant = require("../models/restaurant");
// request query

router.get("/", (request, res) => {
  Restaurant.find({})
    .then((dbResult) => {
      res.render("index.hbs", {
        restaurants: dbResult,
      });
    })
    .catch((err) => console.log(err));
  //   res.render("index.hbs");
});

router.get("/about", (req, res) => {
  res.render("about.hbs");
});

router.get("/:id", (req, res) => {
  Restaurant.findById(req.params.id)
    .then((dbResult) => {
      res.render("oneRestaurant.hbs", {
        restaurant: dbResult,
      });
    })
    .catch((err) => {
      res.render("error.hbs", {
        message: err.message,
      });
    });
});

module.exports = router;
