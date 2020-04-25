const express = require("express");
const router = new express.Router();
const labelModel = require("../models/Label");
const protectAdminRoute = require("../middlewares/protectAdminRoute");


// *********************************************
// ALL THESE ROUTES ARE PREFIXED WITh "/labels"
// *********************************************

// PUBLIC ROUTES

// router.get("/all", (req, res) => {
//   res.render("home");
// });

// PRIVATE ROUTES

router.get("/admin", protectAdminRoute, (req, res, next) => {
  labelModel
    .find() // retreive all the documents in the labels collection
    .then(dbResults =>
      res.render("tables/labels", {
        labels: dbResults
      })
    )
    .catch(next);
});

router.get("/create", protectAdminRoute, (req, res) => {
  res.render("forms/label");
});

router.get("/update/:id", protectAdminRoute, (req, res, next) => {
  labelModel
    .findById(req.params.id) // this will fetch one album by id from db
    .then(label => {
      res.render("forms/label-update", {
        label
      });
    })
    .catch(next); // catched if an error occured );
});

router.get("/delete/:id", protectAdminRoute, (req, res, next) => {
  labelModel
    .findByIdAndDelete(req.params.id)
    .then(dbRes => {
      req.flash("success", "label successfully deleted");
      res.redirect("/labels/admin");
    })
    .catch(next);
});

router.post("/create", protectAdminRoute, (req, res, next) => {
  const newLabel = req.body;
  // if (req.file) newLabel.logo = req.file.secure_url; // check if an image has been uploaded
  if (req.body.logo === "") newLabel.logo = undefined;
  
  labelModel
    .create(newLabel) // use the model and try doc insertion in database
    .then(() => {
      req.flash("success", "label successfully created");
      res.redirect("/labels/admin");
    })
    .catch(next);
});

router.post("/update/:id", protectAdminRoute, (req, res, next) => {
  labelModel
    .findByIdAndUpdate(req.params.id, req.body)
    .then(dbRes => {
      req.flash("success", "label successfully updated");
      res.redirect("/labels/admin");
    })
    .catch(next);
});

module.exports = router;
