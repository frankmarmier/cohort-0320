const express = require("express");
const router = new express.Router();
const User = require("../models/User");
const upload = require("../config/cloudinaryUpload");

const bcrypt = require("bcrypt"); // Encrypting library for passwords. https://www.npmjs.com/package/bcryptjs
// https://www.youtube.com/watch?v=O6cmuiTBZVs

// This route only renders the view.
router.get("/signin", (req, res) => {
  res.render("auth/signin.hbs", {
    error: req.flash("error"),
  });
});

// This one is for receiving post data.
router.post("/signin", (req, res) => {
  const { email, password } = req.body;
  // Check if user already exists with email.
  User.findOne({ email: email })
    .then((foundUser) => {
      // If a user is not found, redirect to get("/signin") with an error message.
      if (!foundUser) {
        req.flash("error", "Invalid credentials....");
        res.redirect("/auth/signin");
      } else {
        // If we're here, it means a user was found, we compare the password
        // coming from the form with the password of the foundUser.
        if (bcrypt.compareSync(password, foundUser.password)) {
          req.session.currentUser = foundUser; // <== This is what allows us to have our user logged in !
          res.redirect("/"); // Redirect to home
          // Matching passwords...
          // Login user...
        } else {
          // If the password didn't match, redirect to signin with an error message.
          req.flash("error", "Invalid credentials...");
          res.redirect("/auth/signin");
        }
      }
    })
    .catch((dbErr) => {
      console.log(dbErr);
    });
});

// Render signup form.
router.get("/signup", (req, res) => {
  res.render("auth/signup.hbs", {
    error: req.flash("error"),
  });
});

router.post("/signup", upload.single("avatar"), (req, res) => {
  // console.log(req.file);
  // console.log(req.body);
  //
  const { email, password } = req.body;
  // Check if user with that email already exists in the Database.
  User.findOne({ email: email })
    .then((foundUser) => {
      // If a user was found, it means the email is already used.
      if (foundUser) {
        req.flash("error", "The email is already taken...");
        res.redirect("/auth/signup");
      } else {
        // Hash the password !
        const salt = 10;
        const hashedPassword = bcrypt.hashSync(password, salt);

        const newUser = {
          email,
          password: hashedPassword,
        };

        if (req.file) {
          newUser.avatar = req.file.secure_url;
        }

        User.create(newUser)
          .then((createdUser) => {
            // User created !
            console.log("here");
            res.redirect("/auth/signin"); // Redirect to signin !
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
  // Destroys the session.
  // Makes the user logged out.
  req.session.destroy((err) => {
    res.redirect("/");
  });
});

module.exports = router;
