const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const artistSchema = new Schema({
  name: String,
  description: String,
  isBand: Boolean,
  rates: [Number],
  style: {
    type: Schema.Types.ObjectId,
    ref: "Style"
  },
});

const artistModel = mongoose.model("Artist", artistSchema);

module.exports = artistModel;
