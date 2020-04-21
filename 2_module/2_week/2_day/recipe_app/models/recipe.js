const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const recipeSchema = new Schema({
  title: { type: String, unique: true, required: true },
  level: {
    type: String,
    enum: ["Easy Peasy", "Amateur Chef", "UltraPro Chef"],
  },
  ingredients: [{ type: Schema.Types.ObjectId, ref: "Food" }],
  cuisine: { type: String, required: true },
  image: {
    type: String,
    default: "https://images.media-allrecipes.com/images/75131.jpg",
  },
  duration: {
    type: Number,
    min: 0,
  },
  creator: { type: Schema.Types.ObjectId, ref: "User" },
  created: { type: Date, default: new Date() },
});

const Recipe = mongoose.model("Recipe", recipeSchema);

module.exports = Recipe;
