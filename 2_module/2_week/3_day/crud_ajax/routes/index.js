var express = require("express");
var router = express.Router();
const User = require("../models/user");

/* GET home page. */
router.get("/", function (req, res, next) {
  User.find()
    .then((dbResult) => {
      res.render("index", { users: dbResult });
    })
    .catch((dbErr) => {
      console.log(dbErr);
    });
});

module.exports = router;
