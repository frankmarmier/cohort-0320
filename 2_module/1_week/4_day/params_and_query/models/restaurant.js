const mongoose = require("mongoose");

const restaurantSchema = new mongoose.Schema({
  name: String,
  city: String,
  typeOfFood: [String],
  rating: Number,
  image: {
    type: String,
    default:
      "https://images.pexels.com/photos/6267/menu-restaurant-vintage-table.jpg?auto=compress&cs=tinysrgb&h=650&w=940",
  },
});

const Restaurant = mongoose.model("Restaurant", restaurantSchema);

module.exports = Restaurant;
