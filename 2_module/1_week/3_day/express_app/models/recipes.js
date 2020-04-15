const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const recipeSchema = new Schema({
  title: { type: String, required: true, unique: true },
  ingredients: [String],
  cuisine: { type: String, required: true },
  image: {
    type: String,
    default: "https://images.media-allrecipes.com/images/75131.jpg",
  },
  duration: { type: Number, default: 0 },
  creator: String,
});

const recipeModel = mongoose.model("Student", recipeSchema);

module.exports = recipeModel;
