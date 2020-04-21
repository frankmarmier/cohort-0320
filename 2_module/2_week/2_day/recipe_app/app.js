require("dotenv").config();
require("./config/dbConnection");
require("./helpers/helpers");
const express = require("express");
const hbs = require("hbs");
const path = require("path");
const flash = require("connect-flash");
const session = require("express-session");
const app = express();

app.set("view engine", "hbs");
hbs.registerPartials(path.join(__dirname, "views", "partials"));

app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: false }));
app.use(
  session({
    secret: "ahard2craaaaackSeCret",
    cookie: {
      maxAge: 600000,
    },
  })
);

app.use(flash());

app.use("/", require("./routes/baseRoutes"));
app.use("/", require("./routes/foods"));
app.use("/recipes", require("./routes/recipes"));

// Error handling routes...

app.listen(process.env.PORT, () => {
  console.log(`Listening on http://localhost:${process.env.PORT}`);
});
