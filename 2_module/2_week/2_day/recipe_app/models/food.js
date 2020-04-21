const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const foodSchema = new Schema({
  image: String,
  name: String,
  price: Number,
  type: {
    type: String,
    enum: ["vegetable", "fruit"],
  },
});

const Food = mongoose.model("Food", foodSchema);

module.exports = Food;
