const express = require("express");
const router = express.Router();
const Character = require("../models/Character");

router.get("/api/characters", (req, res, next) => {
  Character.find()
    .then((characterDocuments) => {
      //   res.render("characters-page.hbs", {characters: characterDocuments}) // before
      res.status(200).json(characterDocuments); // now
    })
    .catch((error) => {
      res.status(500).json(error);
    });
});

router.get("/api/characters/:id", (req, res, next) => {
  Character.findById(req.params.id)
    .then((characterDocument) => {
      res.status(200).json(characterDocument);
    })
    .catch((error) => {
      res.status(500).json(error);
    });
});

router.post("/api/characters", (req, res, next) => {
  // Validate req body before creating.
  Character.create(req.body)
    .then((characterDocument) => {
      res.status(201).json(characterDocument);
    })
    .catch((error) => {
      res.status(500).json(error);
    });
});

router.patch("/api/characters/:id", (req, res, next) => {
  // Validate req body before updating maybe ?
  Character.findByIdAndUpdate(req.params.id, req.body, { new: true })
    .then((characterDocument) => {
      res.status(200).json(characterDocument);
    })
    .catch((error) => {
      res.status(500).json(error);
    });
});

router.delete("/api/characters/:id", (req, res, next) => {
  Character.findByIdAndRemove(req.params.id)
    .then((characterDocument) => {
      console.log(characterDocument);
      if (characterDocument === null) {
        res.status(404).json({ message: "Character not found" });
      } else {
        res.status(204).json(characterDocument);
      }
    })
    .catch((error) => {
      res.status(500).json(error);
    });
});

module.exports = router;
