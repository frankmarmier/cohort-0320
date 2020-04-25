const express = require("express");
const router = new express.Router();
const protectAdminRoute = require("../middlewares/protectAdminRoute");
const styleModel = require("./../models/Style");

// ***********************************************
/* STYLE API */
// ALL THESE ROUTES ARE PREFIXED WITH /api/styles
// ***********************************************

router.post("/create", (req, res, next) => {
  styleModel
    .create({
      name: req.body.name,
      wikiURL: req.body.wikiURL
    })
    .then(dbRes => res.json(dbRes))
    .catch(next);
});

router.get("/all", (req, res, next) => {
  styleModel
    .find()
    .then(dbRes => res.json(dbRes))
    .catch(next);
});

router.get("/:id", protectAdminRoute, (req, res, next) => {
  styleModel
    .findById(req.params.id)
    .then(dbRes => res.json(dbRes))
    .catch(next);
});


router.patch("/update/:id", protectAdminRoute, (req, res, next) => {
  styleModel
    .findByIdAndUpdate(req.params.id, req.body, { new: true })
    .then(dbRes => res.json(dbRes))
    .catch(next);
});

router.delete("/delete/:id", protectAdminRoute, (req, res, next) => {
  styleModel
    .findByIdAndRemove(req.params.id)
    .then(dbRes => res.json(dbRes))
    .catch(next);
});

module.exports = router;
