require("dotenv").config();
const mongoose = require("mongoose");
const Food = require("../models/food");

const foods = [
  {
    name: "Banana",
    image:
      "https://images.pexels.com/photos/2872767/pexels-photo-2872767.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    price: 1,
    type: "fruit",
  },
  {
    name: "Eggplant",
    image:
      "https://images.pexels.com/photos/1340856/pexels-photo-1340856.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    price: 2,
    type: "vegetable",
  },
  {
    name: "Strawberry",
    image:
      "https://images.pexels.com/photos/934066/pexels-photo-934066.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    price: 1,
    type: "fruit",
  },
];

mongoose
  .connect(process.env.MONGODB_URI)
  .then((self) => {
    console.log(`Connected to ${self.connection.name}`);

    // Seeds
    Food.create(foods)
      .then((foods) => {
        foods.forEach((food) => {
          console.log(food.name);
        });
      })
      .catch((err) => {
        console.log(err);
      });
  })
  .catch((err) => {
    console.log(`Error occured while connecting to the Database ${err}`);
  });
