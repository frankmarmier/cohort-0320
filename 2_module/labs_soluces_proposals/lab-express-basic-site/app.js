const path = require("path");
const express = require("express"); // express framework
const hbs = require("hbs"); // hbs, templating engine.

const app = express();  // get the express app module.

app.set("view engine", "hbs");
hbs.registerPartials(path.join(__dirname, "views", "partials")); // Define where the partials folder is located for hbs
                                                                // to look into when a partial is reference into a view.
app.use(express.static(path.join(__dirname, "public")));

app.get("/", (request, response) => {
  response.render("index.hbs"); // response.render("yourview.hbs") allows you to render a view with a templating engine,
                                // this view will be converted into html and sent to the client.
});

app.get("/about", (request, response) => {
  response.render("about.hbs");
});

app.get("/works", (request, response) => {
  response.render("works.hbs");
});

app.listen(4000, () => {
  console.log(`App listening on http://localhost:4000`);
});
