const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const characterSchema = new Schema({
  name: String,
  side: { type: String, enum: ["villain", "super-hero"] },
  picture: {
    type: String,
    default:
      "https://vignette.wikia.nocookie.net/simpsons/images/1/14/Ralph_Wiggum.png/revision/latest/top-crop/width/360/height/360?cb=20100704163100",
  },
  bio: String,
});

const Character = mongoose.model("Character", characterSchema);

module.exports = Character;
