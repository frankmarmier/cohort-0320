const express = require("express");
const router = new express.Router();

const userModel = require("../models/user");

router.get("/", (req, res) => {
  userModel
    .find()
    .then(function (dbResponse) {
      res.render("index.hbs", {
        users: dbResponse,
      });
    })
    .catch((dbErr) => {
      console.log(dbErr);
    });
});

module.exports = router;
