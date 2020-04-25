const express = require("express");
const router = new express.Router();
const protectRoute = require("../middlewares/protectRoute");
const protectAdminRoute = require("../middlewares/protectAdminRoute");

router.get("/", (req, res) => {
  res.render("home");
});

router.get("/dashboard", protectRoute, (req, res) => {
  res.render("dashboard");
});

router.get("/admin", protectAdminRoute, (req, res) => {
  res.render("admin");
});

module.exports = router;
