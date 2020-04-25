const express = require("express");
const router = new express.Router();
const artistModel = require("./../models/Artist");

router.get("/", (req, res, next) => {
  artistModel
    .find({ name: { $regex: req.query.q, $options: "i" } })
    .then(dbRes => res.json(dbRes))
    .catch(next);
});

module.exports = router;
