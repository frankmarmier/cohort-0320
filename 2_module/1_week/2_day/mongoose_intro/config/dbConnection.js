const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/my_first_db", {
  useNewUrlParser: true,
}).then(x => {
    console.log("Connected to the Database")
})
