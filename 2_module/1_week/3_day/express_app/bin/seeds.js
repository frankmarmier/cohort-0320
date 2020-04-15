const mongoose = require("mongoose");
const recipeModel = require("../models/recipes");
const data = require("./data.json");

// const newRecipe = {
//   title: "Langoustina di la mama",
//   ingredients: ["Langoustina", "Pasta", "Amor"],
//   cuisine: "Home made",
//   duration: 10,
//   creator: "Mama",
// };

mongoose
  .connect("mongodb://localhost:27017/recipesApp", {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useCreateIndex: true,
  })
  .then(() => {
    console.log("Connection to the db Succesful");
    recipeModel
      .create(data)
      .then((result) => {
        console.log(result);
      })
      .catch((err) => {
        console.log(err);
      });
  })
  .catch((err) => {
    console.log("Connection to the db failed.");
  });
