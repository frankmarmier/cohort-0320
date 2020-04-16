require("dotenv").config();
const express = require("express");
const hbs = require("hbs");
const path = require("path");

const server = express();

server.use(express.static(path.join(__dirname, "public")));
hbs.registerPartials(path.join(__dirname, "views/partials"));
const baseRouter = require("./routes/baseRoutes");
// console.log(baseRouter)
server.use("/", baseRouter);

server.listen(process.env.PORT, () => {
  console.log(`Server listening on http://localhost:${process.env.PORT}`);
});
