const express = require("express");
const router = express.Router();
const User = require("../models/user");

/* GET users listing. */

// /api/users
router.get("/", function (req, res, next) {
  // res.send("Welcome...");
  const query = req.query;
  User.find({ name: query.search })
    .then((dbResult) => {
      res.status(200).json(dbResult);
    })
    .catch((dbErr) => {
      res.status(500).json({ message: "An error occured" });
    });
});

// Route is prefixed with /api/users
router.post("/", (req, res) => {
  User.create(req.body)
    .then((dbResult) => {
      res.status(201).json(dbResult);
    })
    .catch((dbErr) => {
      console.log(dbErr);
    });
});

// /api/users
router.delete("/:id", (req, res) => {
  User.findByIdAndDelete(req.params.id)
    .then((dbResult) => {
      // dbResult// null
      if (!dbResult) {
        return res.status(404).json({ message: "Not Found" });
      }
      res.status(200).json(dbResult);
    })
    .catch((dbErr) => {
      console.log(dbErr);
    });
});

router.patch("/:id", (req, res) => {
  // console.log(req.params.id);

  User.findByIdAndUpdate(req.params.id, req.body, { new: true })
    .then((dbResult) => {
      res.status(200).json(dbResult);
    })
    .catch((dbErr) => {
      console.log(dbErr);
    });

  // console.log(req.body);
  // console.log("You are here....");
});

module.exports = router;
