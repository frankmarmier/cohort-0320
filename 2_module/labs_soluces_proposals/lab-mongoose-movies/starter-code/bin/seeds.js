const mongoose = require("mongoose");
const Movie = require("../models/Movie");
const Celebrity = require("../models/Celebrity");

const { movies, celebrities } = require("./data"); // An array of movies and celebrities is exported from data.js file.

mongoose
  .connect("mongodb://localhost/starter-code", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .then((x) => {
    // Drop everything in both collections before seeding again.

    return Promise.all([Movie.collection.drop(), Celebrity.collection.drop()]);
  })
  .then(() => {
    Promise.all([Celebrity.create(celebrities), Movie.create(movies)])
      .then((results) => {
        console.log("----------");
        console.log(results[0]);
        console.log("----------");
        console.log(results[1]);
        mongoose.connection.close();
      })
      .catch((err) => {
        console.log(err);
      });
  })
  .catch((err) => {
    console.error("Error connecting to mongo", err);
  });
