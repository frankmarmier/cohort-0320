require("./config/dbConnection");
const express = require("express");
const hbs = require("hbs");

const server = express();

const baseRouter = require("./routes/baseRoute");
server.use("/", baseRouter);

server.listen(4000, () => {
  console.log(`Listening on http://localhost:4000`);
});

// // Create
// userModel
//   .create({
//     firstName: "ola",
//     lastName: "olad",
//     username: "foo",
//   })
//   .then((dbResponse) => {
//     console.log(dbResponse);
//   })
//   .catch((dbErr) => {
//     console.log(dbErr);
//   });

// Read

// userModel
//   .find({})
//   .then((dbResponse) => {
//     console.log(dbResponse);
//   })
//   .catch((dbErr) => {
//     console.log(dbErr);
//   });

// userModel
//   .findByIdAndRemove("5e95bfce5f81ecebda6f8035")
//   .then((dbResponse) => {
//     console.log("Delete succesful",dbResponse);
//   })
//   .catch((dbErr) => {
//     console.log(dbErr);
//   });

// Update

// userModel
//   .findByIdAndUpdate(
//     "5e95c02f299b58ec0d5bd84a",
//     { firstName: "Greg" },
//     { new: true }
//   )
//   .then((dbResponse) => {
//     console.log(dbResponse);
//   })
//   .catch((dbErr) => {
//     console.log(dbErr);
//   });
