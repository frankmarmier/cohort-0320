const express = require("express");
const router = new express.Router();
const protectAdminRoute = require("../middlewares/protectAdminRoute");
const styleModel = require("./../models/Style");

// *********************************************
// ALL THESE ROUTES ARE PREFIXED WITh "/styles"
// *********************************************

// handle and render the initial view
router.get("/admin", protectAdminRoute, async (req, res) => {
  try {
    const styles = await styleModel.find();

    res.render("tables/styles", {
      js: ["table-styles"],
      styles
    });

  } catch (err) {
    next(err);
  }
});

module.exports = router;
