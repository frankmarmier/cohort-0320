const mongoose = require("mongoose");

mongoose
  .connect("mongodb://localhost:27017/Ironhack", {
    useNewUrlParser: true,
  })
  .then(() => {
    console.log("Connected to the db");
  });

const studentModel = require("./models/student");

const newStudent = {
  firstName: "Pauline",
  status: "Part Time",
};

//Create

// studentModel
//   .create(newStudent)
//   .then((dbSuccess) => {
//     console.log(dbSuccess);
//   })
//   .catch((dbErr) => {
//     console.log(dbErr);
//   });

//Read

// studentModel
//   .find({ firstName: "Pauline" })
//   .then((dbRes) => {
//     console.log(dbRes);
//   })
//   .catch((dbErr) => {
//     console.log(dbErr);
//   });

// studentModel.find({ firstName: "Pauline" }, function (dbErr, dbResult) {
//   if (dbErr) {
//     console.log(dbErr);
//   } else {
//     console.log(dbResult);
//   }
// });

// studentModel
//   .updateOne(
//     { firstName: "Michel" },
//     {
//       firstName: "Not Michel",
//     }
//   )
//   .then((dbResponse) => {
//     console.log(dbResponse);
//   })
//   .catch((dbErr) => {
//     console.log(dbErr);
//   });

// Update

// studentModel
//   .findByIdAndUpdate(
//     "5e96c98d0b8f11043e0113c4",
//     {
//       firstName: "Michel",
//       phoneNumber: "010101010101",
//     },
//     { new: true }
//   )
//   .then((dbResponse) => {
//     console.log(dbResponse);
//   })
//   .catch((dbErr) => {
//     console.log(dbErr);
//   });

// studentModel
//   .deleteOne({ firstName: "Pauline" })
//   .then((dbResponse) => {
//     console.log(dbResponse);
//   })
//   .catch((dbErr) => {
//     console.log(dbErr);
//   });

// Delete

// studentModel
//   .findByIdAndDelete("5e96ce0e2bf9cc05e12fd8d1")
//   .then((dbResponse) => {
//     console.log(dbResponse);
//   })
//   .catch((dbErr) => {
//     console.log(dbErr);
//   });

studentModel
  .findByIdAndUpdate("5e96c98d0b8f11043e0113c4", { $unset: { firstName: 1 } })
  .then((dbResponse) => {
    console.log(dbResponse);
  })
  .catch((dbErr) => {
    console.log(dbErr);
  });
