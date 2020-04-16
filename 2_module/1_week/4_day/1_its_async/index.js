const mongoose = require("mongoose");

// Import of the model Recipe from './models/Recipe.model.js'
const Recipe = require("./models/Recipe.model");
// Import of the data from './data.json'
const data = require("./data");

const MONGODB_URI = "mongodb://localhost:27017/recipe-app";

// Connection to the database "recipe-app"

const newRecipe = {
  level: "Easy Peasy",
  ingredients: ["Pasta", "Tomato sauce"],
  cuisine: "Home made",
  duration: 10,
  creator: "Franckles",
};

// mongoose
//   .connect(MONGODB_URI, {
//     useCreateIndex: true,
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//   })
//   .then((self) => {
//     console.log("Promise n°1");
//     return self.connection.dropDatabase();
//   })
//   .then(() => {
//     Recipe.create(newRecipe)
//       .then((dbResult) => {
//         console.log("Promise n°2");
//       })
//       .catch((dbErr) => {
//         console.log(dbErr);
//       });

//     Recipe.insertMany(data)
//       .then((dbRes) => {
//         console.log("Promise n°3");
//       })
//       .catch((dbErr) => {
//         console.log(dbErr);
//       });

//     Recipe.updateOne({ title: "Rigatoni alla Genovese" }, { duration: 200 })
//       .then((dbRes) => {
//         console.log("Promise n°4");
//       })
//       .catch((dbErr) => {
//         console.log(dbErr);
//       });

//     Recipe.deleteOne({ title: "Carrot Cake" })
//       .then((dbRes) => {
//         console.log("Promise n°5");
//       })
//       .catch((dbErr) => {
//         console.log(dbErr);
//       });
//   })
//   .catch((error) => {
//     console.error("Error connecting to the database", error);
//   });

// mongoose
//   .connect(MONGODB_URI, {
//     useCreateIndex: true,
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//   })
//   .then((self) => {
//     console.log("Promise n°1");
//     return self.connection.dropDatabase();
//   })
//   .then(() => {
//     Recipe.create(newRecipe)
//       .then((dbResult) => {
//         console.log("Promise n°2");

//         Recipe.insertMany(data)
//           .then((dbRes) => {
//             console.log("Promise n°3");
//             Recipe.updateOne(
//               { title: "Rigatoni alla Genovese" },
//               { duration: 200 }
//             )
//               .then((dbRes) => {
//                 console.log("Promise n°4");
//                 Recipe.deleteOne({ title: "Carrot Cake" })
//                   .then((dbRes) => {

//                     console.log("Promise n°5");

//                     //Render a view with all the results...
//                     //
//                   })
//                   .catch((dbErr) => {
//                     console.log(dbErr);
//                   });
//               })
//               .catch((dbErr) => {
//                 console.log(dbErr);
//               });
//           })
//           .catch((dbErr) => {
//             console.log(dbErr);
//           });
//       })
//       .catch((dbErr) => {
//         console.log(dbErr);
//       });
//   })
//   .catch((error) => {
//     console.error("Error connecting to the database", error);
//   });

// With async await
async function seeds() {
  try {
    const self = await mongoose.connect(MONGODB_URI, {
      useCreateIndex: true,
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Promise n°1");
    await self.connection.dropDatabase();
    console.log("Promise n°2");
    const createdRecipes = await Recipe.insertMany(data);
    console.log("Promise n°3");
    const createdRecipe = await Recipe.create(newRecipe).catch(err => console.log(err));
    console.log("Promise n°4");

    const updatedRecipe = await Recipe.updateOne(
      { title: "Rigatoni alla Genovese" },
      { duration: 200 }
    );
    const deletedRecipe = await Recipe.deleteOne({ title: "Carrot Cake" });
    console.log("Promise n°5");
    // console.log(createdRecipe)
  } catch (err) {
    console.log(err);
  }
}

seeds();
// console.log("I am after the function")

// Before async await

// mongoose
//   .connect(MONGODB_URI, {
//     useCreateIndex: true,
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//   })
//   .then((self) => {
//     console.log("Promise n°1");
//     return self.connection.dropDatabase();
//   })
//   .then(() => {
//     console.log("Promise n°2");
//     return Recipe.create(newRecipe);
//   })
//   .then((dbRes) => {
//     console.log("Promise n°3")
//     return Recipe.insertMany(data);
//   })
//   .then(dbRes => {
//     console.log("Promise n°4")
//     return Recipe.updateOne({ title: "Rigatoni alla Genovese" },{ duration: 200 });
//   })
//   .then(dbRes => {
//     console.log("Promise n°5");
//     return Recipe.deleteOne({ title: "Carrot Cake" })
//   })
//   .then(dbRes => {
//     console.log("Promise n°6");
//     // Render a view
//   })
//   .catch((error) => {
//     console.error("Error connecting to the database", error);
//   });
