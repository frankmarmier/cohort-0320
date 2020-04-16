require("dotenv").config();
const mongoose = require("mongoose");
const Restaurant = require("../models/restaurant");

const restaurants = [
  {
    name: "BIIIM",
    city: "Paris",
    typeOfFood: ["Burgers", "HotDogs", "Salads"],
    rating: 10,
  },
  {
    name: "La Cabane Libanaise",
    city: "Paris",
    typeOfFood: ["Libanese Food"],
    rating: 10,
  },
  {
    name: "Le Cézar",
    city: "Paris",
    typeOfFood: ["French Cuisine"],
    rating: 10,
  },
];

mongoose
  .connect(process.env.MONGODB_URI)
  .then((self) => {
    Restaurant.create(restaurants)
      .then((dbResponse) => {
        console.log(dbResponse);
      })
      .catch((err) => {
        console.log(err);
      });
  })
  .catch((err) => {
    console.log(err);
  });
