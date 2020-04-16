require("dotenv").config();
require("./config/dbConnection");

const express = require("express");
const hbs = require("hbs");
const server = express();

const baseRouter = require("./routes/baseRoutes");
server.use("/", baseRouter);

const PORT = process.env.PORT;
server.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
