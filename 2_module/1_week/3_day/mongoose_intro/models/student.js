const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: String,
  email: String,
  phoneNumber: String,
  status: {
    type: String,
    enum: ["Full Time", "Part Time"],
  },
  avatar: {
    type: String,
    default:
      "https://images.pexels.com/photos/3324591/pexels-photo-3324591.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
  },
});

const studentModel = mongoose.model("Student", studentSchema);

module.exports = studentModel;
