require("dotenv").config(); // Required in order to be able to access .env variables through process.env.VARIABLE
require("./config/dbConnection"); // Database connection
require("./helpers/helpers"); // Custom hbs block helpers

const express = require("express");
const hbs = require("hbs");
const path = require("path");
const mongoose = require("mongoose");
const flash = require("connect-flash"); // Middleware that allows us to persist some data when redirecting.
// https://www.npmjs.com/package/connect-flash

const session = require("express-session"); // Middleware that allows us to persist data with a client through a cookie.
// https://www.npmjs.com/package/express-session
const MongoStore = require("connect-mongo")(session);

const app = express(); // Express Framework


/**** App Setup */
app.set("view engine", "hbs"); // Set the default view engine. Rendered views won't require the .hbs extension
hbs.registerPartials(path.join(__dirname, "views", "partials")); // Register the location of your partials for hbs
// to look at when rendering a view.

/** MIDDLEWARES Setup */
app.use(express.static(path.join(__dirname, "public"))); // For static files, css,js, images,assets etc..

// app.use(function (req, res, next) {  // Custom middleware
//   console.log("I am heeeeere");
//   next();
// });

app.use(express.urlencoded({ extended: false })); // Middleware that populates the data incoming from a form with a POST method
// You will have access to the data through req.body
app.use(
  session({
    store: new MongoStore({ mongooseConnection: mongoose.connection }),
    secret: "ahard2craaaaackSeCret",
    cookie: {
      maxAge: 60000,
    },
    saveUninitialized: false,
    resave: false,
  })
);

app.use(flash()); // Flash will expose a flash() function on the request object.
// This function is useful to pass information from one route to another.
// The data is stored only for the time of the request.

app.use((req, res, next) => {
  console.log(req.session.currentUser, "----- user session");
  if (req.session.currentUser) {
    res.locals.isLoggedIn = true;
  } else {
    res.locals.isLoggedIn = false;
  }
  next();
});

app.locals.title = "pp";

// Routes configuration

app.use("/", require("./routes/baseRoutes"));
app.use("/", require("./routes/foods"));
app.use("/recipes", require("./routes/recipes"));
app.use("/auth", require("./routes/auth"));

// Error handling routes...

app.listen(process.env.PORT, () => {
  console.log(`Listening on http://localhost:${process.env.PORT}`);
});
