require("dotenv").config();
require("./config/dbConnection");
const express = require("express");
const hbs = require("hbs");
const path = require("path");
const app = express();

app.set("view engine", "hbs");

app.use(express.static(path.join(__dirname, "public")));
hbs.registerPartials(path.join(__dirname, "views", "partials"));

app.use("/", require("./routes/baseRoutes"));
app.use("/", require("./routes/foods"));

app.listen(process.env.PORT, () => {
  console.log(`Listening on http://localhost:${process.env.PORT}`);
});
