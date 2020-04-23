const express = require("express");
const router = new express.Router();
const Celebrity = require("../models/Celebrity");

/** READ */
router.get("/celebrities", (req, res, next) => {
  // Get all the celebrities from the celebrities collection
  Celebrity.find({})
    .then((allCelebs) => {
      res.render("celebrities/index.hbs", {
        celebrities: allCelebs, // We pass the result from the database to our view.
      }); // we can now access the array with the "celebrities key"
    })
    .catch(next);
});

/** Display the create view (form) */
router.get("/celebrities/create", (req, res, next) => {
  res.render("celebrities/new");
});
/** WARNING If you put the /celebrities/create route after
 * defining /celebrities/:id
 *  the /create segment will be interpreted as :id
 * you will never end up on your /celebrities/create route
 * unless you add another segment to either one of these routes.
 */

/** READ ONE */
router.get("/celebrities/:id", (req, res, next) => {
  // findById will retrieve a single document from the collection.
  // mongo id's are unique. The result will be a single object.
  // That we pass to our render method.
  Celebrity.findById(req.params.id)
    .then((oneCeleb) => {
      res.render("celebrities/show.hbs", {
        celebrity: oneCeleb,
      });
    })
    .catch(next);
});

/** CREATE ONE **/
router.post("/celebrities", (req, res, next) => {
  const { name, occupation, catchPhrase } = req.body;
  // Basic verification.
  //  !name || !occupation || !catchPhrase would be the same.
  if (name === "" || occupation === "" || catchPhrase === "") {
    return res.redirect("/celebrities/create");
  }
  Celebrity.create({ name, occupation, catchPhrase })
    .then((oneCreate) => {
      // After creating a celebrity, we redirect the client to the
      // celebrities route.
      // This route will then find all the celebrities in the collection.
      // And render a view displaying them all.
      res.redirect("/celebrities");
    })
    .catch(next);
});

/** Display editing view */
router.get("/celebrities/:id/edit", (req, res, next) => {
  // We have to find the celebrity matching the id passed in the url.
  // In order to populate the form with the details of that celebrity.
  Celebrity.findById(req.params.id)
    .then((oneCeleb) => {
      res.render("celebrities/edit.hbs", {
        celebrity: oneCeleb,
      });
    })
    .catch(next);
});

/** UPDATE ONE  */
router.post("/celebrities/:id/edit", (req, res, next) => {
  const { name, occupation, catchPhrase } = req.body;
  //  !name  || !occupation || !catchPhrase would have the same result
  if (name === "" || occupation === "" || catchPhrase === "") {
    return res.redirect("/celebrities/create");
  }
  Celebrity.findByIdAndUpdate(req.params.id, req.body, { new: true })
    .then((updatedCeleb) => {
      res.redirect("/celebrities");
    })
    .catch(next);
});

/** DELETE ONE */
router.get("/celebrities/:id/delete", (req, res, next) => {
  Celebrity.findByIdAndDelete(req.params.id)
    .then((deleteCeleb) => {
      res.redirect("/celebrities");
    })
    .catch(next);
});

module.exports = router;
