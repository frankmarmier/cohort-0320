const express = require("express");
const router = new express.Router();
const User = require("../models/User");
const bcrypt = require("bcrypt");

router.get("/signin", (req, res) => {
  res.render("auth/signin.hbs", {
    error: req.flash("error"),
  });
});

router.post("/signin", (req, res) => {
  const { email, password } = req.body;

  User.findOne({ email: email })
    .then((foundUser) => {
      if (!foundUser) {
        req.flash("error", "Invalid credentials....");
        res.redirect("/auth/signin");
      } else {
        // console.log(foundUser)
        if (bcrypt.compareSync(password, foundUser.password)) {
          req.session.currentUser = foundUser;
          res.redirect("/");
          // Matching passwords...
          // Login user...
        } else {
          req.flash("error", "Invalid credentials...");
          res.redirect("/auth/signin");
        }
      }
    })
    .catch((dbErr) => {
      console.log(dbErr);
    });
});

router.get("/signup", (req, res) => {
  res.render("auth/signup.hbs", {
    error: req.flash("error"),
  });
});

router.post("/signup", (req, res) => {
  // 
  const { email, password, avatar } = req.body;
  User.findOne({ email: email })
    .then((foundUser) => {
      if (foundUser) {
        req.flash("error", "The email is already taken...");
        res.redirect("/auth/signup");
      } else {
        const salt = 20;
        const hashedPassword = bcrypt.hashSync(password, salt);
        const newUser = {
          email,
          password: hashedPassword,
          avatar,
        };
        User.create(newUser)
          .then((createdUser) => {
            res.redirect("/auth/signin");
          })
          .catch((dbErr) => {
            console.log(dbErr);
          });
      }
    })
    .catch((dbErr) => {
      console.log(dbErr);
    });
});

router.get("/logout", (req, res) => {
  req.session.destroy((err) => {
    res.redirect("/");
  });
});

module.exports = router;
