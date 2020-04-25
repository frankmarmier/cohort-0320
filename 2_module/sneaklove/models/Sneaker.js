const mongoose = require("mongoose");
const Schema = mongoose.Schema;
// - Sneaker {name, ref, sizes, description, price, category: [men, women, kids], id_tags: [ObjectId] }
const sneakerSchema = new Schema({
  name: String,
  ref: String,
  sizes: [String],
  image: {
    type: String,
    default:
      "https://images.journeys.com/images/products/1_570311_ZM_BLACK_ALT1.JPG",
  },
  description: String,
  price: Number,
  category: {
    type: String,
    enum: ["men", "women", "kids"],
  },
  id_tags: [{ type: Schema.Types.ObjectId, ref: "Tag" }],
});

const Sneaker = mongoose.model("Sneaker", sneakerSchema);

module.exports = Sneaker;
