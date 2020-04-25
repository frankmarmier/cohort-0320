const express = require("express");
const router = new express.Router();
const artistModel = require("../models/Artist");
const protectAdminRoute = require("./../middlewares/protectAdminRoute");

// *********************************************
// ALL THESE ROUTES ARE PREFIXED WITh "/artists"
// *********************************************

// PUBLIC ROUTES

router.get("/all", (req, res, next) => {
  artistModel
    .find() // retreive all the documents in the artists collection
    .then(dbResults => {
      res.render("lists/artists", {
        artists: dbResults
      });
    })
    .catch(next);
});

router.get("/page/:id", (req, res, next) => {
  artistModel
    .findById(req.params.id)
    .then(artist => {
      res.render("page-artist", { artist });
    })
    .catch(next);
});

// PRIVATE ROUTES

router.get("/admin", protectAdminRoute, (req, res, next) => {
  artistModel
    .find() // retreive all the documents in the artists collection
    .then(dbResults => {
      res.render("tables/artists", {
        artists: dbResults
      });
    })
    .catch(next);
});

router.get("/create", protectAdminRoute, (req, res) => {
  res.render("forms/artist");
});

router.post("/create", protectAdminRoute, (req, res, next) => {
  const { name, description, isBand } = req.body;
  artistModel
    .create({
      name,
      description,
      isBand: isBand === "yes"
    })
    .then(() => {
      req.flash("success", "artist successfully created");
      res.redirect("/artists/admin");
    })
    .catch(next);
});

router.get("/update/:id", protectAdminRoute, (req, res, next) => {
  artistModel
    .findById(req.params.id)
    .then(dbRes => {
      res.render("forms/artist-update", { artist: dbRes });
    })
    .catch(next);
});

router.post("/update/:id", protectAdminRoute, (req, res, next) => {
  const { name, description, isBand } = req.body;

  artistModel
    .findByIdAndUpdate(req.params.id, {
      name,
      description,
      isBand: isBand === "yes"
    })
    .then(() => {
      req.flash("success", "artist successfully updated");
      res.redirect("/artists/admin")
    })
    .catch(next);
});

router.get("/delete/:id", protectAdminRoute, (req, res, next) => {
  artistModel
    .findByIdAndDelete(req.params.id)
    .then(dbRes => {
      req.flash("success", "artist successfully deleted");
      res.redirect("/artists/admin")
    })
    .catch(next);
});

module.exports = router;
