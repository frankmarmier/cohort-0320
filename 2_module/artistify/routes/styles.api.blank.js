const express = require("express");
const router = new express.Router();
const protectAdminRoute = require("../middlewares/protectAdminRoute");
const styleModel = require("../models/Style");

// ***********************************************
/* STYLE API */
// ALL THESE ROUTES ARE PREFIXED WITH /api/styles
// ***********************************************

router.post("/create", (req, res, next) => {
});

router.get("/:id", (req, res, next) => {
});

router.get("/all", (req, res, next) => {
});

router.patch("/update/:id", (req, res, next) => {
});

router.delete("/delete/:id", (req, res, next) => {
});

module.exports = router;
