const express = require("express");
const router = new express.Router();
const Movie = require("../models/Movie");

/** Same logic as the celebrity CRUD */

router.get("/movies", (req, res, next) => {
  Movie.find({})
    .then((allMovies) => {
      res.render("movies/index.hbs", { movies: allMovies });
    })
    .catch(next);
});

router.get("/movies/create", (req, res, next) => {
  res.render("movies/new.hbs");
});

router.get("/movies/:id", (req, res, next) => {
  Movie.findById(req.params.id)
    .then((oneMovie) => {
      res.render("movies/show.hbs", { movie: oneMovie });
    })
    .catch(next);
});

router.post("/movies", (req, res, next) => {
  const { title, plot, genre } = req.body; // Destructure the title, plot and genre.
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment
  if (title === "" || plot === "" || genre === "") {
    res.redirect("/movies/create");
  } else {
    Movie.create({ title, plot, genre })
      .then((createdMovie) => {
        res.redirect("/movies");
      })
      .catch(next);
  }
});

router.get("/movies/:id/edit", (req, res, next) => {
  Movie.findById(req.params.id)
    .then((oneMovie) => {
      res.render("movies/edit.hbs", { movie: oneMovie });
    })
    .catch();
});

router.post("/movies/:id/edit", (req, res, next) => {
  const { title, plot, genre } = req.body;
  Movie.findByIdAndUpdate(req.params.id, { title, plot, genre }, { new: true })
    .then((updatedMovie) => {
      res.redirect("/movies");
    })
    .catch(next);
});

router.get("/movies/:id/delete", (req, res, next) => {
  Movie.findByIdAndDelete(req.params.id)
    .then((deletedMovie) => {
      res.redirect("/movies");
    })
    .catch(next);
});

module.exports = router;
