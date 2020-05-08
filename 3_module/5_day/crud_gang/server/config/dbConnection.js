const mongoose = require("mongoose");

mongoose
  .connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  })
  .then((self) => {
    console.log(`Connected to the Database ${self.connection.name}`);
  })
  .catch((error) => {
    console.log(`Error connecting to the database ${error}`);
  });
