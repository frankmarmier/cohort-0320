require("dotenv").config();

const mongoose = require("mongoose");
const User = require("../models/user");

const users = [
  {
    name: "Toto",
  },
  {
    name: "Foo",
  },
  {
    name: "Bar",
  },
  {
    name: "Baz",
  },
  {
    name: "Bae",
  },
];

mongoose
  .connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
  })
  .then((self) => {
    console.log(`Connected to ${self.connection.name}`);
    User.create(users)
      .then((createdUsers) => console.log(createdUsers))
      .catch((err) => console.log(err));
  })
  .catch((err) => {
    console.log(err);
  });
