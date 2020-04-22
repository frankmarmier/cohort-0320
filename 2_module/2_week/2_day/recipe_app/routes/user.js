const express = require("express");
const router = new express.Router();

router.get("/profile", (req, res, next) => {
  res.render("profile.hbs");
});

module.exports = router;
