require("dotenv").config();

//Imports...
const express = require("express");
const path = require("path");
const hbs = require("hbs");
const app = express();
const isAuth = require("./middlewares/isAuthenticated");
const isAuthorized = require("./middlewares/isAutorized");
// App setup...
hbs.registerPartials(path.join(__dirname, "views", "partials"));
app.set("view engine", "hbs");

// Middlewares...
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: false }));

app.use(function (request, response, next) {
  // request.toto = "I am toto";
  console.log("Second middleware...");
  next();
});

app.use(function (request, reponse, next) {
  console.log("A request has been made...");
  next();
});

// app.use(isAuthorized("toto"));

app.use(logger);

//Route configurtion
app.get(
  "/",
  isAuthorized(["admin", "content_manager", "ironhacker"]),
  (req, res, next) => {
    // Mongoose query
    console.log(req.toto);
    res.render("index.hbs");

    // next("toto");
  }
);

app.get("/signin", (req, res, next) => {
  res.render("signin.hbs");
});

app.use(function (req, res, next) {
  console.log("You are lost...");
  // 404
  res.render("not_found.hbs");
});

app.use(function (err, request, response, next) {
  console.log(err);
  console.log("You are in the error middleware");
  response.render("error.hbs");
});

app.listen(process.env.PORT || 8080, () => {
  console.log(`App listening on http://localhost:${process.env.PORT}`);
});

function logger(request, response, next) {
  console.log(`The request method is : ${request.method}`);
  next();
}
