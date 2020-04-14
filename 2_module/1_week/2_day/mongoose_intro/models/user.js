const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  username: { type: String, required: true, unique: true },
  lastName: { type: String, required: true },
  email: String,
  password: String,
  age: Number,
  friends: [String],
});

const userModel = mongoose.model("User", userSchema);

module.exports = userModel;
