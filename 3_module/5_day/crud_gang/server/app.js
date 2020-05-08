require("dotenv").config();
require("./config/dbConnection");
const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const cors = require("cors");
const indexRouter = require("./routes/index");
const usersRouter = require("./routes/users");

const app = express();

// Allows communication between apps from different domain.

app.use(
  cors({
    // origin: ["http://localhost:4000","www.facebook.com","www.amazon.com",],
    // origin: "http://localhost:4000",
    // origin: "*"
    origin: process.env.FRONT_END_URL,
  })
);

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);
app.use("/users", usersRouter);
app.use("/", require("./routes/characters"));

module.exports = app;
