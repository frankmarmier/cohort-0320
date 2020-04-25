const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const styleSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  wikiURL: String
});

const styleModel = mongoose.model("Style", styleSchema);

module.exports = styleModel;
