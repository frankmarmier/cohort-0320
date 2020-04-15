require("dotenv").config();
require("./config/dbConnection");
const express = require("express");
const hbs = require("hbs");
const path = require("path");

const app = express();
app.set("view engine", "hbs");
hbs.registerPartials(path.join(__dirname, "views/partials"));
app.use(express.static(path.join(__dirname, "public")));

//Routers
const baseRouter = require("./routes/baseRoutes");
const recipesRouter = require("./routes/recipes");
console.log(baseRouter)
app.use("/", baseRouter);
app.use("/", recipesRouter);

const port = process.env.PORT;
app.listen(port, () => {
  console.log(`App listening on http://localhost:${port}`);
});
