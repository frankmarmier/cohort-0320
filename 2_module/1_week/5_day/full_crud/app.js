require("dotenv").config();
require("./config/dbConnection");
const express = require("express");
const hbs = require("hbs");
const path = require("path");
const session = require("express-session");

const app = express();

app.set("view engine", "hbs");
hbs.registerPartials(path.join(__dirname, "views", "partials"));

app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: false }));

app.use(
  session({
    secret: "Magic Keyboard cat",
    cookie: { maxAge: 60000 },
    saveUninitialized: true,
    resave: true,
  })
);

app.use("/", require("./routes/baseRoutes"));
app.use("/", require("./routes/foods"));

app.listen(process.env.PORT, () => {
  console.log(`Listening on http://localhost:${process.env.PORT}`);
});
