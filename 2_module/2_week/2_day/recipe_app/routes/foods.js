const express = require("express");
const router = new express.Router();
const Food = require("../models/food");
const flash = require("connect-flash");
const requireAuth = require("../middlewares/requireAuth");

// Read
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

router.get("/foods/create", requireAuth, (req, res) => {
  res.render("foods/createFood.hbs", {
    css: ["form.css"],
  });
});

// Create
router.post("/foods", requireAuth, (req, res) => {
  // console.log(req.body);
  // console.log("Inside foods post routes....");
  Food.create(req.body)
    .then((dbResult) => {
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
      // res.redirect("/foods");
    })
    .catch((err) => {
      console.log(err);
    });
});

router.get("/foods/manage", requireAuth, (req, res) => {
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

// Delete
router.get("/foods/delete/:id", requireAuth, (req, res) => {
  console.log("Here...");
  Food.findByIdAndDelete(req.params.id)
    .then((dbResult) => {
      res.redirect("/foods/manage");
    })
    .catch((err) => {
      console.log(err);
    });
});

router.get("/foods/edit/:id", requireAuth, (req, res) => {
  Food.findById(req.params.id)
    .then((dbResult) => {
      res.render("foods/editFood.hbs", {
        food: dbResult,
        error: req.flash("error"),
        css: ["form.css"],
      });
    })
    .catch((dbErr) => {
      console.log(dbErr);
    });
});

router.post("/foods/edit/:id", requireAuth, (req, res) => {
  // console.log(req.params.id);
  // console.log(req.body);
  if (req.body.name === "" || req.body.image === "" || req.body.price === "") {
    req.flash("error", "Fill in everything please");
    res.redirect(`/foods/edit/${req.params.id}`);
  } else {
    Food.findByIdAndUpdate(req.params.id, req.body, { new: true })
      .then((dbResult) => {
        res.redirect("/foods/manage");
      })
      .catch((dbErr) => {
        console.log(dbErr);
      });
  }
});

module.exports = router;
