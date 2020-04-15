const mongoose = require("mongoose");

mongoose
  .connect("mongodb://localhost:27017/recipesApp", {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useCreateIndex: true,
  })
  .then(() => {
    console.log("Connection to the db Succesful");
  });
