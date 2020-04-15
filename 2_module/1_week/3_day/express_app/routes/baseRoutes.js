const express = require("express");
const router = new express.Router();

router.get("/", (req, res) => {
  res.render("index.hbs", { layout: false });
});

module.exports = router;
